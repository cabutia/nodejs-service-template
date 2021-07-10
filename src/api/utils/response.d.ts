import { ValidationErrors } from '@/api/utils/validation.d';

export interface ValidationErrorResponse {
    fields: ValidationErrors;
}

export interface SuccessResponse<T> {
    data?: T;
}
