import mongoose from 'mongoose';

const organizationSchema = mongoose.Schema({

    name: { 
        type: String, 
        required: true, 
        unique: true 
    },
    tagline: { 
        type: String, 
        required: true 
    },
    bio: { 
        type: String,
        required: true 
    },
    productType: { 
        type: String, 
        required: true 
    },
    founded: { 
        type: Date, 
        required: true
    },
    logo: { 
        type: String,
        required: true
    },
    bgpic: {
        type: String,
        required: true
    },
    businessEmail:{
        type: String,
        required: true,
        unique: true
    },
    website: { 
        type: String,
        required: true
    },  
    location: { 
        type: String,
        required: true 
    },
    plan: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan' },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    password: {
        type: String,
        required: true
    }
    }, 
    { timestamps: true }
);

const Organization = mongoose.model("Organization", organizationSchema);

export default Organization;
