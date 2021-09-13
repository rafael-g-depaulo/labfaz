import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeClassDatesToDatetime1631497405784 implements MigrationInterface {
    name = 'ChangeClassDatesToDatetime1631497405784'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course" ALTER COLUMN "class_dates" TYPE TIMESTAMP WITH TIME ZONE array`);
        await queryRunner.query(`COMMENT ON COLUMN "course"."class_dates" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "course"."class_dates" IS NULL`);
        await queryRunner.query(`ALTER TABLE "course" ALTER COLUMN "class_dates" TYPE TIMESTAMP WITH TIME ZONE array`);
    }

}
