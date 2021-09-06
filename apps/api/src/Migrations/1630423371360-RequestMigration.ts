import {MigrationInterface, QueryRunner} from "typeorm";

export class RequestMigration1630423371360 implements MigrationInterface {
    name = 'RequestMigration1630423371360'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teacher" ("id" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL DEFAULT 'professor', "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2f807294148612a9751dacf1026" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "course" ("id" character varying NOT NULL, "type" character varying NOT NULL, "tags" text array, "detail" text array, "fonte" text array, "short_description" character varying NOT NULL, "about" character varying NOT NULL, "requirements" character varying, "available" boolean NOT NULL DEFAULT false, "banner" character varying NOT NULL, "has_subscription" boolean NOT NULL DEFAULT false, "subscription_date" TIMESTAMP NOT NULL, "activity_date" TIMESTAMP NOT NULL, "teacherId" character varying, CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "request" ("id" character varying NOT NULL, "status" character varying NOT NULL, "courseId" character varying, "studentId" character varying, CONSTRAINT "REL_75f23983b423a20777e71c12bf" UNIQUE ("courseId"), CONSTRAINT "PK_167d324701e6867f189aed52e18" PRIMARY KEY ("id"))`);
        // await queryRunner.query(`CREATE TABLE "admin" ("id" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL DEFAULT 'admin', "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e032310bcef831fb83101899b10" PRIMARY KEY ("id"))`);
        // await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        // await queryRunner.query(`ALTER TABLE "user" ADD "isVerified" boolean NOT NULL DEFAULT false`);
        // await queryRunner.query(`ALTER TABLE "user" ADD "banned" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "course" ADD CONSTRAINT "FK_3e002f760e8099dd5796e5dc93b" FOREIGN KEY ("teacherId") REFERENCES "teacher"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "request" ADD CONSTRAINT "FK_75f23983b423a20777e71c12bf3" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "request" ADD CONSTRAINT "FK_227e30f1fd810f592afd1e16fe1" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "request" DROP CONSTRAINT "FK_227e30f1fd810f592afd1e16fe1"`);
        await queryRunner.query(`ALTER TABLE "request" DROP CONSTRAINT "FK_75f23983b423a20777e71c12bf3"`);
        await queryRunner.query(`ALTER TABLE "course" DROP CONSTRAINT "FK_3e002f760e8099dd5796e5dc93b"`);
        // await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "banned"`);
        // await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isVerified"`);
        // await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
        // await queryRunner.query(`DROP TABLE "admin"`);
        await queryRunner.query(`DROP TABLE "request"`);
        await queryRunner.query(`DROP TABLE "course"`);
        await queryRunner.query(`DROP TABLE "teacher"`);
    }

}
