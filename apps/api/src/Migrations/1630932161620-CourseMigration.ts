import {MigrationInterface, QueryRunner} from "typeorm";

export class CourseMigration1630932161620 implements MigrationInterface {
    name = 'CourseMigration1630932161620'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "course_type_enum" AS ENUM('Curso', 'Live', 'Oficina', 'Roda de conversa')`);
        await queryRunner.query(`ALTER TABLE "course" ALTER COLUMN "type" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "course" ALTER COLUMN "type" TYPE "course_type_enum" USING "type"::"text"::"course_type_enum"`);
        await queryRunner.query(`ALTER TABLE "course" ALTER COLUMN "type" SET DEFAULT 'Curso'`);
        await queryRunner.query(`COMMENT ON COLUMN "course"."type" IS NULL`);
        await queryRunner.query(`ALTER TABLE "course" ALTER COLUMN "type" SET DEFAULT 'Curso'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course" ALTER COLUMN "type" SET DEFAULT 'curso'`);
        await queryRunner.query(`COMMENT ON COLUMN "course"."type" IS NULL`);
        await queryRunner.query(`ALTER TABLE "course" ALTER COLUMN "type" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "course" ALTER COLUMN "type" SET DEFAULT 'Curso'`);
        await queryRunner.query(`DROP TYPE "course_type_enum"`);
    }

}
