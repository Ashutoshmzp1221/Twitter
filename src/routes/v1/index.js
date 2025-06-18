import express from 'express';
import { createTweet, getTweet } from '../../controller/tweet-controller.js';
import { toggleLike } from '../../controller/like-controller.js';
import { createComment } from '../../controller/comment-controller.js';
import { signUp } from '../../controller/user-controller.js'
const router = express.Router();

router.post('/tweets', createTweet);
router.get('/tweet/:id', getTweet);
router.post('/likes/toggle', toggleLike);
router.post('/comment', createComment);

router.post('/signup', signUp);

export default router;

