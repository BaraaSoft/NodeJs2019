<<<<<<< HEAD
import { Router } from 'express'
import * as Controllers from './user.controllers'

const router = Router();

router.route('/')
    .get(Controllers.getAllUsers)
    .post(Controllers.createNewUser);

=======
import { Router } from 'express'
import * as Controllers from './user.controllers'

const router = Router();

router.route('/')
    .get(Controllers.getAllUsers)
    .post(Controllers.createNewUser);

router.route('/:id').get(Controllers.findUser)

>>>>>>> e9ecc3d1a9c063805141e727ec110d39f149d0b2
export default router;