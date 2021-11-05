import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateActivities1635912911843 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'activities',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'title',
                    type: 'varchar(75)'
                },
                {
                    name: 'description',
                    type: 'varchar'
                },
                {
                    name: 'vehicle_model',
                    type: 'varchar'
                },
                {
                    name: 'vehicle_color',
                    type: 'varchar'
                },
                {
                    name: 'vehicle_board',
                    type: 'varchar'
                },
                {
                    name: 'client_id',
                    type: 'uuid'
                },
                {
                    name: 'situation_id',
                    type: 'uuid'
                },
                {
                    name: 'user_id',
                    type: 'uuid'
                },
                {
                    name: 'employee_id',
                    type: 'uuid'
                },
                {
                    name: 'prevision_date',
                    type: 'timestamp'
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
            ],
            foreignKeys: [
                new TableForeignKey({
                    name: 'fk_client_id',
                    columnNames: ['client_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'clients',
                    onDelete: 'CASCADE'
                }),
                new TableForeignKey({
                    name: 'fk_situation_id',
                    columnNames: ['situation_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'situations',
                    onDelete: 'CASCADE'
                }),
                new TableForeignKey({
                    name: 'fk_user_id',
                    columnNames: ['user_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'users',
                    onDelete: 'CASCADE'
                }),
                new TableForeignKey({
                    name: 'fk_employee_id',
                    columnNames: ['employee_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'employees',
                    onDelete: 'CASCADE'
                })
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('activities')
    }

}
