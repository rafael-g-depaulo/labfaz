import {MigrationInterface, QueryRunner} from "typeorm";

export class ArtistWithGenderSpecifics1630761832254 implements MigrationInterface {
    name = 'ArtistWithGenderSpecifics1630761832254'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "artist" RENAME COLUMN "is_trans" TO "gender_specifics"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "gender_specifics"`);
        await queryRunner.query(`CREATE TYPE "artist_gender_specifics_enum" AS ENUM('cisgênero', 'transgênero', 'não-binário', 'prefiro não responder')`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "gender_specifics" "artist_gender_specifics_enum" NOT NULL DEFAULT 'prefiro não responder'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "gender_specifics"`);
        await queryRunner.query(`DROP TYPE "artist_gender_specifics_enum"`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "gender_specifics" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artist" RENAME COLUMN "gender_specifics" TO "is_trans"`);
    }

}
