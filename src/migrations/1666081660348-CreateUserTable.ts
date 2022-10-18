import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1666081660348 implements MigrationInterface {
    name = 'CreateUserTable1666081660348'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`test\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`test\` varchar(80) NOT NULL`);
    }

}
