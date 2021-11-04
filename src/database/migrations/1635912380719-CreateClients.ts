import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClients1635912380719 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'clients',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'name',
                    type: 'varchar(60)'
                },
                {
                    name: 'cpf',
                    type: 'varchar(11)'
                },
                {
                    name: 'phone',
                    type: 'varchar(13)'
                },
                {
                    name: 'email',
                    type: 'varchar(30)'
                },
                {
                    name: 'cep',
                    type: 'varchar(15)'
                },
                {
                    name: 'street',
                    type: 'varchar'
                },
                {
                    name: 'neighborhood',
                    type: 'varchar'
                },
                {
                    name: 'number',
                    type: 'varchar(4)'
                },
                {
                    name: 'status',
                    type: 'int',
                    default: 1
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('clients')
    }
}
