
import { UserModel } from './user.model';
import mongoose from 'mongoose';
const getAllUsers = (req, res) => {

    UserModel.find((error, users) => {
        if (error) {
            res.status(400).json(error)
        }
        res.send(users)
    })
}

const createNewUser = (req, res) => {

    let userbody = req.body;
    const userModel = new UserModel(userbody);
    userModel.save((error, user) => {
        if (error) {
            console.log(error)
            res.status(400).json(error)
        }
        res.send(user)
    })
}

const findUser = (req, res) => {
    const { id } = req.params;
    UserModel.findById({ _id: id }).then((user) => {
        res.send(user)
    }).catch(error => {
        console.log(error);
        res.status(400).json(error)
    })
}

export { getAllUsers, createNewUser, findUser }
