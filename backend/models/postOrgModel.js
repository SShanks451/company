import mongoose from 'mongoose';

const postOrgSchema = new mongoose.Schema({
    
    content: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String, 
        required: true, 
        enum: ['active', 'inactive'], 
        default: 'active' 
    },
    deadline: { 
        type: Date, 
        required: true 
    },
    orgId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Organization', 
        required: true 
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    reactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    apply: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Apply' }],
    shares: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Share' }],
    reports: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report' }],
    createdAt: {
        type: Date,
        default: Date.now
    }
    }, 
    { timestamps: true }
);

const PostOrg = mongoose.model('PostOrg', postOrgSchema);

export default PostOrg;
