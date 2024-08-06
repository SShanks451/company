import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
    userId: 
    { type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    text: { 
        type: String, 
        required: true 
    },
    postId: { 
        type: mongoose.Schema.Types.ObjectId, 
        refPath: 'postType'
    },
    postType: { 
        type: String, 
        enum: ['Post', 'PostOrg'], 
        required: function() { return this.postId !== undefined; } 
    },
    parentCommentId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comment' 
    },
    reactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    reports: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report' }],
    replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
}, 
{ timestamps: true });

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
