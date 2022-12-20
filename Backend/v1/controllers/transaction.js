import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";
import user from "../models/User.js";
import Transaction from "../models/Transaction.js";
import transactionService from "../services/transaction.js";

export const findTotal = async (req, res) => {
    const userPerformer=req.user;
    try {

        const transactions = await Transaction.findTotal({user:userPerformer._id});

        return Response.success(res, `${transactions.length} transaction(s) found`, transactions);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}
export const findById = async (req, res) => {
    const transactionId = req.params.id;
    try {
        const sessions = await transactionService.findById(transactionId);

        return Response.success(res, `Transaction found`, sessions);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}

export const create = async (req, res) => {
    const transaction = req.body;
    const userPerformer=req.user;
    if(!userPerformer)
      return Response.err(res,ApiError.badRequest("User not found"));
    try {

        const createdTransaction = await transactionService.create(transaction,userPerformer);

        return Response.success(res, `Transaction done`, createdTransaction);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }

}

export const update = async (req, res) => {
    const transaction = req.body;
    try {

        const updatedTransaction = await transactionService.update(transaction);

        return Response.success(res, `Transaction successfully updated`, updatedTransaction);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }

}