import { Schema, model, Types } from 'mongoose'

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        required: true,
        type: String
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number
    }
}, { timestamps: true });


export const UserModel = model('UserModel', userSchema);