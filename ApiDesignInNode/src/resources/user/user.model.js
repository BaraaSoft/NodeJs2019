import { Schema, model, Types } from 'mongoose'
import bcrypt from 'bcrypt'

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


userSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next();

    bcrypt.hash(this.password, 10).then((hash) => {
        this.password = hash;
        next();
    }).catch(error => next(error))
})

userSchema.methods.checkPassword = async (password) => {
    const hash = this.password;
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (error, res) => {
            if (error) return reject(error);
            return resolve(res)
        });

    });
}


export const UserModel = model('UserModel', userSchema);