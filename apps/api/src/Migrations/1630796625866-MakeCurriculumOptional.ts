import {MigrationInterface, QueryRunner} from "typeorm";

export class MakeCurriculumOptional1630796625866 implements MigrationInterface {
    name = 'MakeCurriculumOptional1630796625866'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "artist" ALTER COLUMN "curriculum" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "artist"."curriculum" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "artist"."curriculum" IS NULL`);
        await queryRunner.query(`ALTER TABLE "artist" ALTER COLUMN "curriculum" SET NOT NULL`);
    }

}
