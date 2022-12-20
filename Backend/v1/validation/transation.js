import ApiError from "../middleware/apiError.js";

class TransactionValidation {
    insert(transaction) {
        if (!transaction)
            throw ApiError.badRequest('transaction details are required');

        if (!transaction.session)
            throw ApiError.badRequest('Session is required');

        if (!transaction.amount)
            throw ApiError.badRequest('Amount type is required');


        if (!transaction.transaction_status)
            throw ApiError.badRequest('Transaction status is required');

        return true;
    }

    update(transaction) {
        this.insert(transaction);

        if (!transaction._id)
            throw ApiError.badRequest('Transaction id is requried');

        return true;
    }

    
}

export default new TransactionValidation();