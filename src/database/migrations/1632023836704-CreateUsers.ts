import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1632023836704 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'email',
                    type: 'varchar',
                    scale: 2
                },
                {
                    name: 'password',
                    type: 'varchar'
                },
                {
                    name: 'old_password',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'level',
                    type: 'int',
                    default: 1
                },
                {
                    name: 'status',
                    type: 'int',
                    default: 1
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }
}
