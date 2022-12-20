import { deleteFeed, getFeeds, getUserFeeds, postFeeds, updateFeed } from '../controllers/feeds.js';
import router from './auth.js';

// Feeds:
router.get('/:linkedinId/feeds', getFeeds);
router.get('/:linkedinId/user-feeds', getUserFeeds);
router.post('/:linkedinId/new-feed', postFeeds);
router.put('/:linkedinId/update-feed/:feedId', updateFeed);
router.delete('/:linkedinId/delete-feed/:certId', deleteFeed);

export default router;