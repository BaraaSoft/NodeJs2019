import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors';

import { dbconnection } from './utils/db';
import { signUp, signIn, protect } from './utils/auth'

import ItemRouter from './resources/item/item.route';
import UserRouter from './resources/user/user.route'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))




/**** Writting a middleware *****/
const logParams = (req, res, next) => {
    console.log(">> logParams:")
    console.log(req.query)
    console.log(ItemRouter.stack.map(x => console.log(x)))
    next();
}
app.use(logParams)
/**************************/

/**** Resource Routers *****/
app.use('/item', ItemRouter);
app.use('/users', UserRouter)

/**************************/


app.post('/signup', signUp);
app.post('/signin', signIn);
app.get('/protect', protect);


app.get('/', (req, res) => {
    res.send({ message: 'hello api?' })
});
app.post('/', (req, res) => {
    res.send({ message: `server: ${req.body.message || "no message"}` });
})

export const start = async () => {
    try {
        await dbconnection();
        app.listen(90, () => {
            console.log(`server up on port ${90}`)
        })
    } catch (e) {
        console.log(e)
    }

}
