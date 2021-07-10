import { Response } from 'express';
import { ValidationErrors } from '@/api/utils/validation.d';
import {
    ValidationErrorResponse,
    SuccessResponse,
} from '@/api/utils/response.d';

/**
 * Sends a successful string response
 * @param res
 * @param body
 */
export const message = (res: Response, msg: string) => {
    res.status(200).send(msg);
};

/**
 * Sends a successful response
 * @param res The express response
 * @param body
 */
export const success = <T>(res: Response, body?: T) => {
    const response: SuccessResponse<T> = {
        data: body,
    };
    res.status(200).send(response);
};

/**
 * Sends a validation error response
 * @param res The express response
 * @param errors
 */
export const invalidRequest = (res: Response, errors?: ValidationErrors) => {
    const response: ValidationErrorResponse = {
        fields: errors || {},
    };
    res.status(422).send(response);
};
