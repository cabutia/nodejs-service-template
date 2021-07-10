import { Router } from 'express';
import * as healthController from '@/api/controllers/health.controller';

export const healthRouter: Router = Router();

healthRouter.get('/', healthController.healthCheck);
