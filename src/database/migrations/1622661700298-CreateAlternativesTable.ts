import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAlternativesTable1622661700298 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> { 
        await queryRunner.createTable(new Table({
        name: 'alternatives',
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
                name: 'right_answer',
                type: 'boolean',
                default: false
            },{
                name: 'question_id',
                type: 'integer',
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
                name: "FKQuestion",
                referencedTableName: "questions",
                referencedColumnNames: ["id"],
                columnNames: ["question_id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            }
        ]
    }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('alternatives');
    }

}
