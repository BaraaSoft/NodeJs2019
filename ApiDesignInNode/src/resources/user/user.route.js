import { Router } from 'express'
import * as Controllers from './user.controllers'

const router = Router();

router.route('/')
    .get(Controllers.getAllUsers)
    .post(Controllers.createNewUser);

router.route('/:id').get(Controllers.findUser)

export default router;