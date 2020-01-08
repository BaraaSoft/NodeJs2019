import { Schema, model } from 'mongoose'


const listSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 50,
        trim: true
    },
    description: String,
    createdBy: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'UserModel'
    }
}, { timestamps: true })


export const ListModel = model('ListModel', listSchema)