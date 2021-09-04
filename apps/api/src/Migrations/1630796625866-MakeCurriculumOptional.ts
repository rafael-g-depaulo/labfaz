import {MigrationInterface, QueryRunner} from "typeorm";

export class MakeCurriculumOptional1630796625866 implements MigrationInterface {
    name = 'MakeCurriculumOptional1630796625866'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "gender_specifics"`);
        await queryRunner.query(`DROP TYPE "public"."artist_gender_specifics_enum"`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "is_trans" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artist" ALTER COLUMN "curriculum" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "artist"."curriculum" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "artist"."curriculum" IS NULL`);
        await queryRunner.query(`ALTER TABLE "artist" ALTER COLUMN "curriculum" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "is_trans"`);
        await queryRunner.query(`CREATE TYPE "public"."artist_gender_specifics_enum" AS ENUM('cisgênero', 'transgênero', 'não-binário', 'prefiro não responder')`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "gender_specifics" "artist_gender_specifics_enum" NOT NULL DEFAULT 'prefiro não responder'`);
    }

}
