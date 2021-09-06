import {MigrationInterface, QueryRunner} from "typeorm";

export class CourseMigration1630934315545 implements MigrationInterface {
    name = 'CourseMigration1630934315545'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course" DROP COLUMN "name"`);
    }

}
