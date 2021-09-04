import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeGenderSpecifics1630796607826 implements MigrationInterface {
    name = 'ChangeGenderSpecifics1630796607826'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "artist" RENAME COLUMN "gender_specifics" TO "is_trans"`);
        await queryRunner.query(`ALTER TYPE "public"."artist_gender_specifics_enum" RENAME TO "artist_is_trans_enum"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "is_trans"`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "is_trans" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "is_trans"`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "is_trans" "artist_is_trans_enum" NOT NULL DEFAULT 'prefiro não responder'`);
        await queryRunner.query(`ALTER TYPE "artist_is_trans_enum" RENAME TO "artist_gender_specifics_enum"`);
        await queryRunner.query(`ALTER TABLE "artist" RENAME COLUMN "is_trans" TO "gender_specifics"`);
    }

}
