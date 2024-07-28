import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, required: true, refPath: 'senderType' },
    receiver: { type: mongoose.Schema.Types.ObjectId, required: true, refPath: 'receiverType' },
    senderType: { type: String, required: true, enum: ['User', 'Organization'] },
    receiverType: { type: String, required: true, enum: ['User', 'Organization'] },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
},
{ timestamps: true });

const Message = mongoose.model("Message", messageSchema);

export default Message;