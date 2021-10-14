import {MigrationInterface, QueryRunner} from "typeorm";

export class MakeSignupFieldsOptional1634223514350 implements MigrationInterface {
    name = 'MakeSignupFieldsOptional1634223514350'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "artist" ALTER COLUMN "cpf" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artist" ALTER COLUMN "rg" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "city" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "cep" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "neighbourhood" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "number" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "number" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "neighbourhood" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "cep" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "city" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artist" ALTER COLUMN "rg" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artist" ALTER COLUMN "cpf" SET NOT NULL`);
    }

}
