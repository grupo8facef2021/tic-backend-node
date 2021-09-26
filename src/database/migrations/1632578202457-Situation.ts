import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Situation1632578202457 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'situations',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'description',
                    type: 'varchar'
                },
                {
                    name: 'color',
                    type: 'varchar'
                },
                {
                    name: 'status',
                    type: 'int'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('situations')
    }

}

