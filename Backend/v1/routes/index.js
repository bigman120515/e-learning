import upload from './upload.js';
import masterSkill from './masterSkill.js';
import authRouter from './auth.js';
import postRouter from './posts.js';
import postLikeRouter from './postLike.js';
import PostShareRouter from './share.js';
import postLinkRouter from './getPostLink.js';
import onboardingRouter from './onboarding.js';
import latestNews from './latestNews.js';
import searchRouter from './search.js';
import skillRouter from './userSkill.js';
import profileUpdateRouter from './profileUpdate.js';
import userRouter from './user.js';
import userCertificationRouter from './userCertification.js';
import userEducationRouter from './userEducation.js';
import userExperienceRouter from './userExperience.js';
import userPagesRouter from './userPages.js';
import notificationRouter from './notification.js';
import connectionRouter from './connections.js';
import sessionRouter from './session.js';
import commentRouter from './comments.js';
import addReplyRouter from './reply.js';
import availabilityRouter from './availability.js';
import pricingRouter from './pricing.js';
import paymentMethodRouter from './paymentMethod.js';
import userLanguageRouter from './userLanguage.js';
import groupSessionRouter from './groupSession.js';
import photoRouter from './photo.js';
import favoritesRouter from './favorites.js';
import profileRouter from './profileLoad.js';
import transactionRouter from './transaction.js';


// const ENDPOINT = 'api'; // Not using currently
const VERSION = 'v1';

function router(app) {
    app.use(`/${VERSION}/uploads`, upload);
    app.use(`/${VERSION}/skills`, masterSkill);
    app.use(`/${VERSION}/news`, latestNews);
    app.use(`/${VERSION}/user`, authRouter);
    app.use(`/${VERSION}/user`, postRouter);
    app.use(`/${VERSION}/user`, postLikeRouter);
    app.use(`/${VERSION}/user`, PostShareRouter);
    app.use(`/${VERSION}/user`, postLinkRouter);
    app.use(`/${VERSION}/user`, onboardingRouter);
    app.use(`/${VERSION}/user`, searchRouter);
    app.use(`/${VERSION}/user`, skillRouter);
    app.use(`/${VERSION}/certificates`, userCertificationRouter);
    app.use(`/${VERSION}/user`, userEducationRouter);
    app.use(`/${VERSION}/user`, userExperienceRouter);
    app.use(`/${VERSION}/user`, userRouter);
    app.use(`/${VERSION}/user`, userPagesRouter);
    app.use(`/${VERSION}/user`, profileUpdateRouter);
    app.use(`/${VERSION}/user`, notificationRouter);
    app.use(`/${VERSION}/conn`, connectionRouter);
    app.use(`/${VERSION}/connections`, connectionRouter);
    app.use(`/${VERSION}/sessions`, sessionRouter);
    app.use(`/${VERSION}/user`, commentRouter);
    app.use(`/${VERSION}/user`, addReplyRouter);
    app.use(`/${VERSION}/availabilities`, availabilityRouter);
    app.use(`/${VERSION}/user`, pricingRouter);
    app.use(`/${VERSION}/user`, paymentMethodRouter);
    app.use(`/${VERSION}/user`, userLanguageRouter);
    app.use(`/${VERSION}/user`, groupSessionRouter);
    app.use(`/${VERSION}/user`, photoRouter);
    app.use(`/${VERSION}/user`, favoritesRouter);
    app.use(`/${VERSION}/user`, profileRouter);
    app.use(`/${VERSION}/user`, transactionRouter);
}

export default router;