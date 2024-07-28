import mongoose from 'mongoose';

const applySchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    postOrg: { type: mongoose.Schema.Types.ObjectId, ref: 'PostOrg', required: true },
    coverLetter: { type: String },
    appliedAt: { type: Date, default: Date.now }
},
{   timestamps: true    });

const Apply = mongoose.model('Apply', applySchema);

export default Apply;
