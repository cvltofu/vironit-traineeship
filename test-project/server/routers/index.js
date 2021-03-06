import Router from 'express';
import userController from '../controllers/user-controller.js';
import todoController from '../controllers/todo-controller.js';
import { body } from 'express-validator';
import authMiddleware from '../middlewares/auth-middleware.js';

const router = new Router();

router.post(
    '/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 16 }),
    userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);
router.get('/todos/', authMiddleware, todoController.getTodos);
router.post('/todos/', authMiddleware, todoController.postTodos);
router.delete('/todos/:id', authMiddleware, todoController.deleteTodos);

export default router;
