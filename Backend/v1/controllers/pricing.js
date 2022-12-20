import Pricing from "../models/Pricing.js";
import user from "../models/User.js";
import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";

export const addPricing = async (req, res) => {
    const id = req.params.linkedinId;
    const { skill, price } = req.body;
    try {
        const fetchedUser = await user.findOne({ linkedinId: id });
        const newPricing = new Pricing({
            user: fetchedUser._id,
            skill: skill,
            price: price,
        });
        await newPricing.save();
        const result = {
            data: newPricing,
        };

        Response.success(res, "New pricing added successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};

export const getPricing = async (req, res) => {
    let id = req.params.linkedinId;
    try {
        let fetchedUser = await user.findOne({ linkedinId: id });
        let fetchedPricing = await Pricing.find({ user: fetchedUser._id, isDeleted: false });
        const result = {
            data: fetchedPricing,
        };

        Response.success(res, "Pricing found successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};

// export const updatePricing = async (req, res) => {
//     let pricingId = req.params.pricingId;
//     let data = req.body;
//     try {
//         let fetchedPricing = await Pricing.findByIdAndUpdate(pricingId, { $set: data });
//         await fetchedPricing.save();
//         const result = {
//             data: fetchedPricing,
//         };

//         Response.success(res, "Pricing updated successfully!", result);
//     } catch (err) {
//         if (err instanceof ApiError)
//             return Response.error(res, err);

//         return Response.error(res, ApiError.internal(err));
//     }
// };
export const updatePricing = async (req, res) => {
    const data = req.body;
    const pricingId = req.params.pricingId
    if (!data) return ApiError.badRequest("Enter details");
    try{
    //const certification = await UserCertification.findOneAndUpdate({_id:certId}, {$set: data});
    const pricing = await Pricing.findOne({_id:pricingId});
    
    pricing.skill=data.skill;
    pricing.price=data.price;
    
    await pricing.save();
    const result = {
        data: pricing,
    }

    Response.success(res, "pricing updated successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
        return Response.error(res, err);
        return Response.error(res, ApiError.internal(err));
    }
}


export const deletePricing = async (req, res) => {
    let pricingId = req.params.pricingId;
    try {
        let fetchedPricing = await Pricing.findByIdAndUpdate(pricingId, { $set: {isDeleted: true} });
        await fetchedPricing.save();
        const result = {
            data: fetchedPricing,
        };

        Response.success(res, "Pricing deleted successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};