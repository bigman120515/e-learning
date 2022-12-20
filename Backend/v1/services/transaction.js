import Transaction from "../models/Transaction.js";
import Validation from "../validation/transation.js";
import ApiError from "../middleware/apiError.js";



class transactionService {
    async findTotal() {
        if(!userPerformer)
           throw ApiError.badRequest('User not found');
        const transactions = await Transaction.find({user:userPerformer._id ,isDeleted: false })
            .sort({ date: -1 });

        return transactions; 
    }
    
    async findById(id) {
        if (!id)
            throw ApiError.badRequest('Transaction id is required');

        const foundTransactions = await Transaction.findOne({ _id: id, isDeleted: false });
        if (!foundTransactions)
            throw ApiError.notFound('Transactions not found');

        return foundTransactions;
    }

    async create(transaction,userPerformer) {
        const isValid = Validation.insert(transaction);
        if (!isValid)
            return;

            const createdTransaction = await Transaction.create({
                user: transaction.user_id,
                session: transaction.session,
                amount: transaction.amount,
                paid_by: userPerformer._id,
                transaction_date: new Date(),
                transaction_mode: transaction.transaction_mode,
                transaction_status: transaction.transaction_status,
                // isPaid: transaction.isPaid
            });
    
            return createdTransaction;
        }

    
    
    async update(transaction) {
        const isValid = Validation.update(transaction);
        if (!isValid)
            return;

        const updatedtransaction = await Transaction.findOneAndUpdate(
            {
                isDeleted: false,
                _id: transaction._id
            },
            {
                $set: transaction
            },
            {
                new: true
            });

        return updatedtransaction;
    }

    


}

export default new transactionService();