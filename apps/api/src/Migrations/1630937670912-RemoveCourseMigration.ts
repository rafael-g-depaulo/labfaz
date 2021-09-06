import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveCourseMigration1630937670912 implements MigrationInterface {
    name = 'RemoveCourseMigration1630937670912'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course" DROP COLUMN "activity_date"`);
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course" ADD "activity_date" TIMESTAMP NOT NULL`);
    }

}
