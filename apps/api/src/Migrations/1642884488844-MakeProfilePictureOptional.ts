import {MigrationInterface, QueryRunner} from "typeorm";

export class MakeProfilePictureOptional1642884488844 implements MigrationInterface {
    name = 'MakeProfilePictureOptional1642884488844'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "profile_picture_url" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "profile_picture_url" SET NOT NULL`);
    }

}
