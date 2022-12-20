import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
import user from "../models/User.js";
import Connections from "../models/Connections.js";
import Validation from "../validation/connections.js";

export const addConnections = async (req, res, next) => {
    const userPerformer = req.user;
    const conn = req.body._id;
    const isValid = Validation.insert(conn);
    if (!isValid)
        return;
    try {
        const fetchedConnection = await Connections.findOne({
            user: userPerformer._id,
            connection: conn,
            isDeleted: false
        });
        if (fetchedConnection)
            return Response.error(res, ApiError.badRequest("Already connected"))
        const newconnection = new Connections({
            connection: conn,
            user: userPerformer._id
        });

        const addedConnection = await newconnection.save();
        await user.updateOne({ _id: userPerformer._id }, { $push: { connections: conn } });
        await user.updateOne({ _id: conn }, { $push: { connections: userPerformer._id } });
        Response.success(res, "Connection added successfully!", addedConnection);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
export const sendInvitation = async (req, res, next) => {
    const userPerformer = req.user;
    const user_id=userPerformer._id
    const conn = req.body._id;
    const isValid = Validation.insert(conn);
    if (!isValid)
        return;
    if(conn===user_id)
        return Response.error(res,ApiError.badRequest("Can't invite myself"));
    try {
        const fetchedInvitation = await Connections.findOne({ user: userPerformer._id, connection: conn, isDeleted: false,isRejected:false });
        if (fetchedInvitation)
            return Response.error(res, ApiError.badRequest("Already Invited"))
        const newInvitation = new Connections({
            connection: conn,
            user: userPerformer._id

        });

        await newInvitation.save();
        //await user.updateOne({_id:userPerformer._id},{$push: {connections:conn}});
        await user.updateOne({ _id: conn }, { $push: { invitations: userPerformer._id } });
        Response.success(res,"Invitation sent!",);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const acceptInvitation = async (req, res, next) => {
    const userPerformer = req.user;
    const invitation = req.body._id;
    const isValid = Validation.insert(invitation);
    if (!isValid)
        return;
    try {
        const fetchedInvitation = await user.findOne({ _id: userPerformer._id, invitations: invitation, isDeleted: false, isAccepted: false });
        if (!fetchedInvitation)
            return Response.error(res, ApiError.badRequest("Invitation not found"))

        await Connections.findOneAndUpdate({ connection: userPerformer._id, user: invitation, isAccepted: false, isDeleted: false },
            { $set: { isAccepted: true } },
            { new: true })

        await user.updateOne({ _id: userPerformer._id }, { $push: { connections: invitation } });
        await user.updateOne({ _id: conn }, { $push: { connections: userPerformer._id } });
        await user.updateOne({ _id: userPerformer._id }, { $pull: { invitations: invitation } });
        Response.success(res, "Connected!",);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const rejectInvitation = async (req, res, next) => {
    const userPerformer = req.user;
    const invitation = req.params.Id;
    const isValid = Validation.insert(invitation);
    if (!isValid)
        return;
    try {
        const fetchedInvitation = await user.findOne({
            _id: userPerformer._id,
            invitations: invitation,
            isDeleted: false
        });
        if (!fetchedInvitation)
            return Response.error(res, ApiError.badRequest("Invitations not found"))

        const rejectedInvitation = await Connections.findOneAndUpdate({
            connection: userPerformer._id,
            user: invitation,
            isAccepted: false,
            isDeleted: false,
            isRejected: false
        },
            { $set: { isRejected: true } },
            { new: true })

        //await user.updateOne({_id:userPerformer._id},{$push: {connections:conn}});
        if (rejectedInvitation) {
            const invite = await user.updateOne({ _id: userPerformer._id },
                { $pull: { invitations: invitation } });
        }
        Response.success(res, "Invitation rejected!",);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const myInvitees = async (req, res) => {
    let userPerformer = req.user;
    const invitations = userPerformer.invitations;
    if (invitations.length < 1)
        return Response.error(res, ApiError.badRequest("No invitations found"));
    let inviteesArr = [];
    try {
        for await (let invitation of invitations) {
            let fetchUser = await user.findById(invitation);
            inviteesArr.push(fetchUser);
        }

        let finalData = inviteesArr.map(({ firstName, lastName, _id, profilePicture, currentJobTitle, currentCompany, location, country, connections }) => {
            let output = {
                "id": _id,
                "fullName": firstName + " " + lastName,
                "profilePicture": profilePicture,
                "currentJobTitle": currentJobTitle,
                "currentCompany": currentCompany,
                "location": location,
                "country": country,
                "totalConnections": connections.length
            }
            return output;
        });

        const result = finalData

        Response.success(res, "Invitations found successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

// Show connections:
export const showMyConnections = async (req, res) => {
    const userPerformer = req.user;
    if (!userPerformer)
        return Response.error(res, ApiError.badRequest("User not found"));
    const connections = userPerformer.connections;
    if (connections.length < 1)
        return Response.error(res, ApiError.badRequest("No connections found"));
    const connectionArr = [];
    try {
        for await (let connection of connections) {
            let fetchUser = await user.findById(connection);
            connectionArr.push(fetchUser);
        }

        let finalData = connectionArr.map(({ firstName, lastName, _id, profilePicture, currentJobTitle, currentCompany, location, country, connections }) => {
            let output = {
                "id": _id,
                "fullName": firstName + " " + lastName,
                "profilePicture": profilePicture,
                "currentJobTitle": currentJobTitle,
                "currentCompany": currentCompany,
                "location": location,
                "country": country,
                "totalConnections": connections.length
            }
            return output;
        });

        const result = finalData

        Response.success(res, "connections found successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

// Removing an existing connection:
export const removeConnection = async (req, res) => {
    let userPerformer = req.user;
    const id = req.params.Id;
    const isValid = Validation.delete(userPerformer, id);
    if (!isValid)
        return;
    try {
        const removedConnection = await Connections.findOneAndUpdate(
            { user: userPerformer._id, connection: id, isDeleted: false },
            { $set: { isDeleted: true } }, { new: true });
        if (!removedConnection)
            return Response.error(res, ApiError.badRequest("Not found"))
        //const removedconnection=await Connections.deleteOne({connection:id})
        await user.updateOne({ _id: userPerformer._id }, { $pull: { connections: id } });
        await user.updateOne({ _id: id }, { $pull: { connections: userPerformer._id } });
        // userData.connections.pull({_id: userData._id});
        // await userData.save();

        Response.success(res, "Connection removed successfully!", removedConnection);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};

export const showConnectionsOfUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const foundUser = await user.findOne({_id:userId, isDeleted: false})
        .select({connections:1})
        .populate('connections', 
        ['_id', 'firstName', 'lastName', 'profilePicture', 'currentJobTitle', 
        'currentCompany', 'location', 'country', 'totalConnections']);

        if (!foundUser)
            return Response.error(res, ApiError.badRequest("User not found"));
        
        
        /* const connections = foundUser.connections;
        
        const connectionArr = [];
        for await (let connection of connections) {
            let fetchUser = await user.findById(connection);
            connectionArr.push(fetchUser);
        }

        let finalData = connectionArr.map(({ firstName, lastName, _id, profilePicture, currentJobTitle, currentCompany, location, country, connections }) => {
            let output = {
                "id": _id,
                "fullName": firstName + " " + lastName,
                "profilePicture": profilePicture,
                "currentJobTitle": currentJobTitle,
                "currentCompany": currentCompany,
                "location": location,
                "country": country,
                "totalConnections": connections.length
            }
            return output;
        });

        const result = finalData */

        const result = foundUser.connections;

        Response.success(res, "Connections found successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
