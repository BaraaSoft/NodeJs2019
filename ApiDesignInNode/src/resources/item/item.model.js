import { Schema, model } from 'mongoose';

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['done', 'inprogress', 'cancel'],
        default: 'inprogress'
    },
    notes: String,
    due: Date,
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'UserModel',
        required: true
    },
    list: {
        type: Schema.Types.ObjectId,
        ref: 'ListModel',
        required: true
    }
}, { timestamps: true })

itemSchema.index({ list: 1, name: 1 }, { unique: true });

export const ItemModel = model('ItemModel', itemSchema);