import dotenv from 'dotenv';
import ApiError from "../middleware/apiError.js";
import sgMail from '@sendgrid/mail';
import SendGridUtils from '../Utils/SendGridUtils.js';
import Response from '../middleware/response.js';
import LatestNewsService from '../services/latestNews.js';
import welcomeHtmlTheme from '../../html/welcome.js';

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendMail = async (req, res, next) => {
    const verificationCode = 100000 + Math.floor(Math.random() * 900000);

    let userData = req.user;
    let { email } = userData;

    try {
        userData.set({
            userOTPs: verificationCode,
        })
        userData.save();
        //const msg = `Hello, thanks for registering on our site. Please enter the verification code ${verificationCode} to verify your account.`;
        const msg = welcomeHtmlTheme(userData.firstName + " " + userData.lastName, verificationCode);
        const result = await SendGridUtils.Send(email,
            'Verify your Learnet account', null, msg);

        Response.success(res, "Mail sent successfully!", result);
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
};

export const userVerification = async (req, res, next) => {
    let userData = req.user;
    let { otp } = req.body;
    try {
        if (otp === userData.userOTPs) {
            userData.set({
                isVerified: true,
                userOTPs: null,
            });
            await userData.save();
            const result = {
                data: userData
            };

            //Updating latest news
            const firstName = userData.firstName;
            const lastName = userData.lastName;
            const fullName = firstName + (lastName !== null ? ` ${lastName}` : '');
            
            const news = `${fullName} has joined Learnet`;
            await LatestNewsService.create({title:news});

            return Response.success(res, "User verified successfully!", result);
        } else {
            throw ApiError.notAuthorized("Incorrect OTP");
        }
    } catch (err) {
        if (err instanceof ApiError)
            return Response.error(res, err);

        return Response.error(res, ApiError.internal(err));
    }
}