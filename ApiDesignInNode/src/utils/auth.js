import jwt from 'jsonwebtoken';
import { UserModel } from '../resources/user/user.model'


const sign = (user) => {
    const key = "NodeJsApiDesign201908";
    return new Promise((resolve, reject) => {
        const token = jwt.sign({ id: user._id, email: user.email }, key);
        resolve(token);
    })
}
const verify = (token) => {
    const key = "NodeJsApiDesign201908";
    return new Promise((resolve, reject) => {
        try {
            var user = jwt.verify(token, key);
            resolve(user)
        } catch (e) {
            reject(e)
        }
    });
}

export const signUp = async (req, res) => {
    const newUser = req.body;
    const userExist = await UserModel.findOne({ email: newUser.email }).select('email').exec();
    if (userExist) {
        res.status(422).json({
            error: {
                message: "user already exist"
            }
        });
        return;
    }
    const user = await UserModel.create(newUser);
    try {
        const token = await sign(user);
        res.status(201).json({
            data: user,
            token: token
        })
    } catch (error) {
        res.status(401).json({
            error
        })
    }
}

export const signIn = async (req, res) => {
    const xuser = req.body;
    const user = await UserModel.findOne({ email: xuser.email }).exec();
    if (!user.email) return res.status(404).json({ error: `No user with email:${xuser.email}  has been found` });
    try {
        const valid = await user.checkPassword(xuser.password)
        if (!valid) return res.status(401).json({ error: "signIn failed" });
        const token = await sign(user);
        res.send({
            token
        })

    } catch (error) {
        console.log(error)
        res.status(401).json({
            error: "signin failed"
        })
    }
}

export const protect = async (req, res, next) => {
    const token = req.headers.authorization.split('Bearer')[1].trim()
    if (!token) return res.status(401).end();
    try {
        const user = await verify(token);
        const savedUser = await UserModel.findById(user.id)
            .select('-password')
            .lean()
            .exec();
        if (!savedUser.email) return res.status(401).json({ error: `Invalid token` })
        if (savedUser._id == user.id) {
            req.user = savedUser;
            return next();
        }

    } catch (e) {
        console.log(e)
    }


    return res.status(401).json({
        message: 'access denied'
    })


}