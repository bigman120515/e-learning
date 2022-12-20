import jwt from 'jsonwebtoken';
import ApiError from '../middleware/apiError.js';
import dotenv from 'dotenv';
dotenv.config();

const secret = "k308OnQ4xOZiRzhY9OQ+NXS6iFkpypRbXQEbBtGwuKQ=";//process.env.SECRET;

const algorithm = 'HS256';

class JwtUtils{
    async generateToken(user) {
        const days = 30;
        const token = jwt.sign(user, String(secret), {
            algorithm: algorithm,
            expiresIn: (60 * 60) * (24 * days),
        });

        return token;
    }
    verifyToken(token) {
        var result = null;
        jwt.verify(token, secret, {
            algorithms: [algorithm]
        }, function (err, user) {
            if (err)
                throw ApiError.notAuthorized();
            result = user;
        })
        return result;
    }
}

export default new JwtUtils();