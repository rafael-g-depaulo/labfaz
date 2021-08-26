import {MigrationInterface, QueryRunner} from "typeorm";

export class setContactAsNullable1629995026958 implements MigrationInterface {
    name = 'setContactAsNullable1629995026958'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "isVerified" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "user" ADD "banned" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "curriculum" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "whatsapp"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "whatsapp" text`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "twitter"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "twitter" text`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "facebook"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "facebook" text`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "instagram"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "instagram" text`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "linkedin"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "linkedin" text`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "tiktok"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "tiktok" text`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "youtube"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "youtube" text`);
        await queryRunner.query(`ALTER TABLE "artist" ALTER COLUMN "artistic_name" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "artist"."artistic_name" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "artist"."artistic_name" IS NULL`);
        await queryRunner.query(`ALTER TABLE "artist" ALTER COLUMN "artistic_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "youtube"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "youtube" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "tiktok"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "tiktok" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "linkedin"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "linkedin" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "instagram"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "instagram" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "facebook"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "facebook" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "twitter"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "twitter" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "whatsapp"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "whatsapp" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "curriculum"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "banned"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isVerified"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
    }

}
