import { Request, Response } from 'express';
import { check } from 'express-validator';
import { validate } from '@/api/utils/validation';
import { message } from '@/api/utils/response';

/**
 * Sample request with validation
 */
export const validateRequest = async (req: Request, res: Response) => {
    await check('email')
        .isEmail()
        .withMessage('Must be an email')
        .isLength({ min: 10 })
        .withMessage('Must have at least 10 characters')
        .run(req);
    await check('password')
        .isLength({ min: 10 })
        .withMessage('Must be at least 10 characters long')
        .run(req);
    await check('nested.field')
        .isLength({ min: 5, max: 12 })
        .withMessage('Must have between 5 and 12 characters')
        .isAlpha()
        .withMessage('Must only contain alpha characters')
        .run(req);
    if (!validate(req, res)) return;
    return message(res, 'Valid!');
};
