import jwt from 'jsonwebtoken';
import { UserModel } from '../resources/user/user.model'


export const sign = (user, key) => {
    return new Promise((resolve, reject) => {
        const token = jwt.sign({ id: user._id }, key);
        resolve(token);
    })
}
export const verify = (token, key) => {
    return new Promise((resolve, reject) => {
        try {
            var id = jwt.verify(token, key);
            resolve(id)
        } catch (e) {
            reject(e)
        }
    });
}

export const signUp = async (req, res) => {
    const newUser = req.body;
    const userExist = await UserModel.findOne({ email: newUser.email }).select('email').exec();
    if (userExist) {
        res.status(401).json({
            error: {
                message: "user already exist"
            }
        });
        return;
    }
    const user = await UserModel.create(newUser);
    console.log(`>> Password : ${user.password}`)
    try {
        const token = await sign(user, user.password);
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
    console.log(xuser)
    //const user = await UserModel.findOne({ email: xuser.email }).exec();
    //if (!user.email) return res.status(401).json({ error: "signIn failed" });
    try {
        //const valid = await user.findOne({ email: xuser.email }).checkPassword(xuser.password)
        UserModel.where({ email: xuser.email }).findOne(async (error, usermodel) => {
            const valid = usermodel.checkPassword(xuser.password)
            if (!valid) return res.status(401).json({ error: "signIn failed" });
            const token = await sign(usermodel, usermodel.password);
            res.send({
                token
            })
        })

    } catch (error) {
        console.log(error)
        res.status(401).json({
            error: "signin failed"
        })
    }
}

export const protect = async (req, res) => {
    const { token, email } = req.query
    const user = await UserModel.where({ email: email }).findOne().exec();
    if (!user) return res.status(401).json({ error: "access failed" })


    try {
        const userIdToken = await verify(token, user.password);
        if (user._id == userIdToken.id) {
            res.send({
                message: 'Access successfully'
            })
        }

    } catch (e) {
        console.log(e)
    }


    return res.status(401).json({
        message: 'access denied'
    })


}