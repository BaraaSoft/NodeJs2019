import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    settings: {
        theme: {
            type: String,
            default: 'dark'
        },
        notifications: {
            type: Boolean,
            default: true
        }
    }
},
    { timestamps: true }
);

userSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next();
    bcrypt.hash(this.password, 8, (error, hash) => {
        if (error) return next(error);
        this.password = hash;
        next();
    })
})

userSchema.methods.checkPassword = function (passwordTxt) {
    const passwordHash = this.password;
    return new Promise((resolve, reject) => {
        bcrypt.compare(passwordTxt, passwordHash, (error, isSame) => {
            if (error) return reject(error);
            return resolve(isSame);
        })
    })
}

const UserModel = mongoose.model('Users', userSchema);


export { UserModel };