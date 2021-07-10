import { User } from '@/database/models/User';
import { IUser } from '@/types/user';
import { logger } from '@/utils/logger';
import crypto from 'crypto';
import { getRepository, Repository } from 'typeorm';

/**
 * Creates an user
 */
export const create = async (user: IUser): Promise<User> => {
    const repository: Repository<User> = getRepository(User);

    const model: User = new User();
    model.email = user.email;
    model.firstName = user.firstName;
    model.midName = user.midName;
    model.lastName = user.lastName;
    model.password = ((): string => {
        const salt: string = crypto.randomBytes(16).toString('hex');
        const password: string = crypto
            .pbkdf2Sync(user.password, salt, 1000, 64, 'sha512')
            .toString('hex');
        return password;
    })();

    try {
        await repository.save(user);
    } catch (e) {
        logger.error('Failed to save user');
        return null;
    }

    return model;
};
