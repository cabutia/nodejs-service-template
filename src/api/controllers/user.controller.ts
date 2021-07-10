import { Request, Response } from 'express';
import { check } from 'express-validator';
import { success } from '@/api/utils/response';
import { validate } from '@/api/utils/validation';
import * as userService from '@/services/user.service';

/**
 * Creates an user
 * @param req The express request
 * @param res The express response
 * @returns
 */
export const create = async (req: Request, res: Response) => {
    await check('firstName')
        .exists()
        .bail()
        .withMessage('Please provide your first name')
        .isString()
        .run(req);
    await check('midName').optional().isString().run(req);
    await check('lastName')
        .exists()
        .bail()
        .withMessage('Please provide your last name')
        .isString()
        .run(req);
    await check('email')
        .exists()
        .bail()
        .withMessage('Please provide your email address')
        .isString()
        .isEmail()
        .withMessage('Invalid email format')
        .normalizeEmail()
        .run(req);
    await check('password')
        .exists()
        .bail()
        .withMessage('Please provide a password')
        .isString()
        .isStrongPassword()
        .withMessage('Password is weak')
        .run(req);

    if (!validate(req, res)) return;

    const user = await userService.create({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        midName: req.body.midName,
        lastName: req.body.lastName,
    });

    return success(res, {
        message: 'User created successfully',
        user,
    });
};
