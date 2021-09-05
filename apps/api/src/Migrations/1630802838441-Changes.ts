import {MigrationInterface, QueryRunner} from "typeorm";

export class Changes1630802838441 implements MigrationInterface {
    name = 'Changes1630802838441'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "technical" DROP COLUMN "is_affiliated"`);
        await queryRunner.query(`ALTER TABLE "technical" DROP COLUMN "want_be_affiliated"`);
        await queryRunner.query(`ALTER TABLE "technical" ADD "drt" text`);
        await queryRunner.query(`ALTER TABLE "technical" ADD "ceac" text`);
        await queryRunner.query(`ALTER TABLE "technical" ADD "cnpj" text`);
        await queryRunner.query(`ALTER TABLE "technical" ADD "name_enterprise" text`);
        await queryRunner.query(`CREATE TYPE "technical_cnpj_type_enum" AS ENUM('MEI', 'Microempresa', 'Pequena empresa', 'Eireli', 'OSC', 'Outro', 'Nenhum')`);
        await queryRunner.query(`ALTER TABLE "technical" ADD "cnpj_type" "technical_cnpj_type_enum" NOT NULL DEFAULT 'Nenhum'`);
        await queryRunner.query(`ALTER TABLE "technical" ADD "profission" character varying NOT NULL`);
        await queryRunner.query(`CREATE TYPE "artist_sexual_orientation_enum" AS ENUM('assexual', 'bissexual', 'heterosexual', 'pansexual', 'lésbica', 'gay', 'prefiro não dizer')`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "sexual_orientation" "artist_sexual_orientation_enum" NOT NULL DEFAULT 'prefiro não dizer'`);
        await queryRunner.query(`ALTER TABLE "admin" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artist" ALTER COLUMN "social_name" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "artist"."social_name" IS NULL`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "complement"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "complement" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "complement"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "complement" character varying NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "artist"."social_name" IS NULL`);
        await queryRunner.query(`ALTER TABLE "artist" ALTER COLUMN "social_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "sexual_orientation"`);
        await queryRunner.query(`DROP TYPE "artist_sexual_orientation_enum"`);
        await queryRunner.query(`ALTER TABLE "technical" DROP COLUMN "profission"`);
        await queryRunner.query(`ALTER TABLE "technical" DROP COLUMN "cnpj_type"`);
        await queryRunner.query(`DROP TYPE "technical_cnpj_type_enum"`);
        await queryRunner.query(`ALTER TABLE "technical" DROP COLUMN "name_enterprise"`);
        await queryRunner.query(`ALTER TABLE "technical" DROP COLUMN "cnpj"`);
        await queryRunner.query(`ALTER TABLE "technical" DROP COLUMN "ceac"`);
        await queryRunner.query(`ALTER TABLE "technical" DROP COLUMN "drt"`);
        await queryRunner.query(`ALTER TABLE "technical" ADD "want_be_affiliated" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "technical" ADD "is_affiliated" boolean NOT NULL DEFAULT false`);
    }

}
