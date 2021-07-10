import { Router } from 'express';
import * as userController from '@/api/controllers/user.controller';

export const userRouter: Router = Router();

userRouter.post('/', userController.create);
