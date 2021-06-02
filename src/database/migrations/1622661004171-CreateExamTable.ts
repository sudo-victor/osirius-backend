import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateExamTable1622661004171 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
        name: 'exams',
        columns: [
            {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
            },{
                name: 'name',
                type: 'varchar',
                isUnique: true
            },{
                name: 'user_id',
                type: 'uuid',
            },{
                name: "updated_at",
                type: "timestamp",
                default: "now()"
            },{
                name: "created_at",
                type: "timestamp",
                default: "now()"
            }
        ],
        foreignKeys: [
            {
                name: "FKUser",
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                columnNames: ["user_id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            }
        ]
    }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('exams');
    }

}
