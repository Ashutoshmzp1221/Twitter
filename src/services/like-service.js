import { TweetRepository, LikeRepository } from '../repository/index.js'

class LikeService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.likeRepository = new LikeRepository();
    }

    async toggleLike(modelId, modelType, userId) {
        if(modelType == 'Tweet') {
            var likeable = await this.tweetRepository.find(modelId);
            
        } else if(modelType == 'Comment') {

        } else {
            throw new Error('Unknown model type');
        }

        const exists = await this.likeRepository.findByUserAndLikeable({
            user: userId,
            onModel: modelType,
            likeable: modelId
        });

        if(exists) {
            likeable.likes.pull(exists.id);
            await likeable.save();
            await this.likeRepository.destroy(exists.id);
            // await exists.remove();
            var isRemoved = true;
        } else {
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();

            var isRemoved = false;
        }
        return isRemoved;
    }
}

export default LikeService;