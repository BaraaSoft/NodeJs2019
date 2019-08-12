
import { UserModel } from './user.model';

const getAllUsers = (req, res) => {

    UserModel.find((error, users) => {
        if (error) {
            res.status(400).json({
                message: {
                    error: "users not found!"
                }
            })
        }
        res.send(users)
    })
}

const createNewUser = (req, res) => {

    const userbody = req.body;
    const userModel = new UserModel(userbody);
    userModel.save((error, user) => {
        if (error) {
            console.log(error)
            res.status(400).json({
                message: {
                    error: "users has not been created!"
                }
            })
        }
        res.send(user)
    })
}

export { getAllUsers, createNewUser }