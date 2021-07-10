import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from '@/types/user';

@Entity('users')
export class User implements IUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    midName?: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;
}
