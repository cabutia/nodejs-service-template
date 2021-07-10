import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class createUsersTable1624830352500 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isNullable: false,
                        isGenerated: true,
                    },
                    {
                        name: 'firstName',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'midName',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'lastName',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        isNullable: false,
                    },
                ],
            })
        );

        await queryRunner.createIndex(
            'users',
            new TableIndex({
                name: 'idx_user_email',
                columnNames: ['email'],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
