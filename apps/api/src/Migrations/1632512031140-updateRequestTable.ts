import {MigrationInterface, QueryRunner} from "typeorm";

export class updateRequestTable1632512031140 implements MigrationInterface {
    name = 'updateRequestTable1632512031140'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "request" ADD "conector" text`)
        await queryRunner.query(`ALTER TABLE "request" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "request" ADD "conector" text`)
        await queryRunner.query(`ALTER TABLE "request" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`)
    }

}
