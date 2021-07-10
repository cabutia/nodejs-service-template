import express, { Router } from 'express';
import { healthRouter } from '@/api/routes/health.routes';
import { validationRouter } from '@/api/routes/validation.routes';
import { userRouter } from '@/api/routes/user.routes';

/**
 * Defines the application's main router.
 * Makes use of the different modules routers.
 */
const router: Router = express.Router();

router.use('/health', healthRouter);
router.use('/validation', validationRouter);
router.use('/user', userRouter);

export { router };
