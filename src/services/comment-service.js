import { CommentRepository, TweetRepository } from '../repository/index.js';

class CommentService {
    constructor() {
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }

    async createComment(modelId, modelType, userId , content) {
        if(modelType == 'Tweet') {
            var commentable = await this.tweetRepository.get(modelId);
        } else if(modelType == 'Comment') {
            var commentable = await this.commentRepository.get(modelId)
        } else {
            throw new Error('Unknown model type');
        }

        const comment = await this.commentRepository.create({
            content: content,
            userId: userId,
            onModel: modelType,
            commentable: modelId,
            comments: []
        });
        console.log(comment);
        commentable.comments.push(comment);
        await commentable.save();
        return comment;
    }
}

export default CommentService;