import { MigrationInterface, QueryRunner } from "typeorm"

export class AddProfilePictureToUser1642882454736 implements MigrationInterface {
    name = 'AddProfilePictureToUser1642882454736'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "profile_picture_url" character varying NOT NULL`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "profile_picture_url"`)
    }

}
