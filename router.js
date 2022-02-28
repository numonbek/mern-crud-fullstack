import { Router } from 'express';
import CrudController from './controllers/crudController.js';
const router = new Router();

router.post('/post', CrudController.create);
router.get('/get', CrudController.getAll);
router.get('/get/:id', CrudController.getOne);
router.put('/update/:id', CrudController.update);
router.delete('/remove/:id', CrudController.delete);

export { router };
