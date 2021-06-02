import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAnswersTable1622662241654 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> { 
        await queryRunner.createTable(new Table({
        name: 'answers',
        columns: [
            {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
            },{
                name: 'name',
                type: 'varchar',
            },{
                name: 'points',
                type: 'integer',
            },{
                name: 'exam_id',
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
                name: "FKExam",
                referencedTableName: "exams",
                referencedColumnNames: ["id"],
                columnNames: ["exam_id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            }
        ]
    }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('answers');
    }

}
