import mongoose from 'mongoose';

const shareSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    sharedToUserId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    postId: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true 
    },
    postModel: { 
        type: String, 
        required: true, 
        enum: ['Post', 'PostOrg'] 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
}, 
{ timestamps: true });

const Share = mongoose.model("Share", shareSchema);

export default Share;
