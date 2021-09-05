import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateStateInAddress1630794080268 implements MigrationInterface {
    name = 'CreateStateInAddress1630794080268'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" ADD "state" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "state"`);
    }

}
