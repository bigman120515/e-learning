import PaymentMethod from "../models/PaymentMethod.js";
import user from "../models/User.js";
import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";

export const addPaymentMethod = async (req, res) => {
     let id = req.params.linkedinId;
    let { paypal, velmo } = req.body;
    try {
        let fetchedUser = await user.findOne({ linkedinId: id });
        const newPaymentMethod = new PaymentMethod({
            user: fetchedUser._id,
            paypal:paypal,
            velmo: velmo,
        });
        await newPaymentMethod.save();
        const result = {
            data: newPaymentMethod,
        };

        Response.success(res, "New payment method added successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};

export const getPaymentMethod = async (req, res) => {
    let id = req.params.linkedinId;
    try {
        const fetchedUser = await user.findOne({ linkedinId: id });
        const fetchedPaymentMethod = await PaymentMethod.find({ user: fetchedUser._id, isDeleted: false });
        const result = fetchedPaymentMethod
        

        Response.success(res, "Payment methods found successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};

export const updatePaymentMethod = async (req, res) => {
    let paymentMethodId = req.params.paymentMethodId;
    let data = req.body;
    try {
        let fetchedPaymentMethod = await PaymentMethod.findByIdAndUpdate(paymentMethodId, { $set: data },{new:true});
        await fetchedPaymentMethod.save();
        const result = {
            data: fetchedPaymentMethod,
        };

        Response.success(res, "Payment method updated successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};

export const deletePaymentMethod = async (req, res) => {
    let paymentMethodId = req.params.paymentMethodId;
    try {
        let fetchedPaymentMethod = await PaymentMethod.findByIdAndUpdate(paymentMethodId, { $set: {isDeleted: true} });
        await fetchedPaymentMethod.save();
        const result = {
            data: fetchedPaymentMethod,
        };

        Response.success(res, "Payment method deleted successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};