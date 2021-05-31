import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1622490898254 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'uui',
                    isPrimary: true,
                },{
                    name: 'fullname',
                    type: 'varchar',
                },{
                    name: 'email',
                    type: 'varchar',
                    isUnique: true
                },{
                    name: 'password',
                    type: 'varchar',
                },{
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                },{
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
