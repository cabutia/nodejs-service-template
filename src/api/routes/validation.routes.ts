import { Router } from 'express';
import * as validationController from '@/api/controllers/validation.controller';

export const validationRouter: Router = Router();

validationRouter.post('/', validationController.validateRequest);
