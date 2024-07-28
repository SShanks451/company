import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    reason: { 
        type: String, 
        required: true 
    },
    reportedEntityId: { type: mongoose.Schema.Types.ObjectId, required: true },
    entityType: { 
        type: String, 
        required: true, 
        enum: ['Post', 'PostOrg', 'Comment', 'Message', 'Share']
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
}, 
{ timestamps: true });

const Report = mongoose.model("Report", reportSchema);

export default Report;
