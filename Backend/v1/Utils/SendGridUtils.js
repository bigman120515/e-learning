import * as sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
dotenv.config();

class SendGridUtils {
    static async Send(toEmail, subject, text, html) {
		const sendGridAPIKey = "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"; //process.env.SENDGRID_API_KEY
        sgMail.default.setApiKey(sendGridAPIKey);
        const msg = {
            to: toEmail,
            from: {
                email: 'info@ateek.me', // Use the email address or domain you verified above
                name: 'Learnet'
             }, 
            subject: subject
        };
        if(!html)
            msg.text = text;
        else msg.html = html;
        
        try {
            await sgMail.default.send(msg);
            return true;
        } catch (error) {
            if (error.response) {
                console.error(error.response.body);
            }
        }

    }
}

export default SendGridUtils;