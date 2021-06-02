import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateQuestionsTable1622661361448 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> { 
        await queryRunner.createTable(new Table({
        name: 'questions',
        columns: [
            {
                name: 'id',
                type: 'integer',
                isGenerated: true,
                generationStrategy: 'increment',
                isPrimary: true,
            },{
                name: 'text',
                type: 'varchar',
            },{
                name: 'expiration_time',
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
        await queryRunner.dropTable('questions');
    }

}
