import { Router } from 'express';
import commentController from './comment.controller'
const router = Router();

router.route('/')
    .get(commentController.fetchAll)
    .post(commentController.createNew);

router.route('/:id')
    .get(commentController.fetchOne)
    .put(commentController.update)
    .delete(commentController.deleteOne)


export default router;
