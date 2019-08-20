import { Router } from 'express';
import * as controllers from './item.controllers';

const router = Router();


router.route('/')
    .get(controllers.getAll)
    .post(controllers.createOne)

router.route('/:id')
    .get(controllers.getOne)
    .put(controllers.updateOne)
    .delete(controllers.deleteOne)


export default router;