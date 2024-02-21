import {Schema, model, models} from 'mongoose'

const UserSchema = new Schema({
    clerkId: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    photo: {type: String, required: true},
    username: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    planId: {type: Number, default: 1},
    creditBalance: {type: Number, default: 10},
});

const User = models?.User || model('User',UserSchema);

export default User;