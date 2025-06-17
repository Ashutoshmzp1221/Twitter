import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    onModel: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        enum: ['Tweet', 'Comment']
    },
    commentable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'model'
    }
}, {timestamps : true });


const Comment = mongoose.model('Comment', commentSchema);
export default Comment ;