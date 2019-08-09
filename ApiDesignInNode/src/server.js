import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

import ItemRouter from './resources/item/item.route'

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
/**************************/

app.get('/', (req, res) => {

    res.send({ message: 'hello api?' })
});
app.post('/', (req, res) => {
    res.send({ message: `server: ${req.body.message || "no message"}` });
})

export const start = () => {
    app.listen(3000, () => {
        console.log(`server up on port ${3000}`)
    })
}
