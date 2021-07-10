import { Request, Response } from 'express';
import * as healthService from '@/services/health.service';
import { message } from '@/api/utils/response';

/**
 * Returns service health
 */
export const healthCheck = (req: Request, res: Response) => {
    const status: string = healthService.getHealth();
    return message(res, status);
};
