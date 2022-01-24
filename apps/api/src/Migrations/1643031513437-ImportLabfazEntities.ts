import {MigrationInterface, QueryRunner} from "typeorm";

export class ImportLabfazEntities1643031513437 implements MigrationInterface {
    name = 'ImportLabfazEntities1643031513437'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."course_type_enum" AS ENUM('Curso', 'Live', 'Oficina', 'Roda de conversa')`);
        await queryRunner.query(`CREATE TABLE "course" ("id" character varying NOT NULL, "name" character varying NOT NULL, "teacher" text array NOT NULL DEFAULT '{}', "type" "public"."course_type_enum" NOT NULL DEFAULT 'Curso', "tags" text array NOT NULL DEFAULT '{}', "detail" text array NOT NULL DEFAULT '{}', "fonte" text array NOT NULL DEFAULT '{}', "short_description" character varying NOT NULL, "about" character varying NOT NULL, "requirements" character varying, "available" boolean NOT NULL DEFAULT false, "banner" character varying NOT NULL, "has_subscription" boolean DEFAULT false, "subscription_start_date" TIMESTAMP, "subscription_finish_date" TIMESTAMP, "class_dates" TIMESTAMP WITH TIME ZONE array NOT NULL DEFAULT '{}', "link" character varying NOT NULL, CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "request" ("id" character varying NOT NULL, "status" character varying NOT NULL DEFAULT 'pending', "courseId" character varying, "studentId" character varying, CONSTRAINT "PK_167d324701e6867f189aed52e18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" character varying NOT NULL, "whatsapp" text, "twitter" text, "facebook" text, "instagram" text, "linkedin" text, "tiktok" text, "youtube" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "artistId" character varying, CONSTRAINT "REL_c25f1d5033a8fc3ecebc2e9dc6" UNIQUE ("artistId"), CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "certificate" ("id" character varying NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "areaId" character varying, CONSTRAINT "PK_8daddfc65f59e341c2bbc9c9e43" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."area_technical_formation_enum" AS ENUM('autodidata', 'curso especializado', 'tecnico', 'tecnologica', 'universitaria')`);
        await queryRunner.query(`CREATE TABLE "area" ("id" character varying NOT NULL, "technical_formation" "public"."area_technical_formation_enum" NOT NULL DEFAULT 'autodidata', "name" character varying NOT NULL, "started_year" character varying NOT NULL, "describe" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "technicalId" character varying, CONSTRAINT "PK_39d5e4de490139d6535d75f42ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "idiom" ("id" character varying NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "technicalId" character varying, CONSTRAINT "PK_62cb75850e3e4e96d21d8fbbe08" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."technical_formation_enum" AS ENUM('não tem', 'ensino fundamental 1', 'ensino fundamental 2', 'ensino médio', 'ensino médio tecnico', 'curso superior', 'pos')`);
        await queryRunner.query(`CREATE TYPE "public"."technical_cnpj_type_enum" AS ENUM('MEI', 'Microempresa', 'Pequena empresa', 'Eireli', 'OSC', 'Outro', 'Nenhum')`);
        await queryRunner.query(`CREATE TABLE "technical" ("id" character varying NOT NULL, "formation" "public"."technical_formation_enum" NOT NULL DEFAULT 'não tem', "is_drt" boolean NOT NULL DEFAULT false, "drt" text, "is_ceac" boolean NOT NULL DEFAULT false, "ceac" text, "is_cnpj" boolean NOT NULL DEFAULT false, "cnpj" text, "name_enterprise" text, "cnpj_type" "public"."technical_cnpj_type_enum" NOT NULL DEFAULT 'Nenhum', "profession" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "artistId" character varying, CONSTRAINT "REL_d1459b519237b8204115086d27" UNIQUE ("artistId"), CONSTRAINT "PK_0071c7d8a6bae24482194122df9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."artist_gender_specifics_enum" AS ENUM('cisgênero', 'transgênero', 'não-binário', 'prefiro não responder')`);
        await queryRunner.query(`CREATE TYPE "public"."artist_sexual_orientation_enum" AS ENUM('assexual', 'bissexual', 'heterosexual', 'pansexual', 'lésbica', 'gay', 'prefiro não dizer')`);
        await queryRunner.query(`CREATE TYPE "public"."artist_race_enum" AS ENUM('nenhuma', 'branca', 'preta', 'parda', 'amarela', 'indigena')`);
        await queryRunner.query(`CREATE TYPE "public"."artist_show_name_enum" AS ENUM('nome', 'nome social', 'nome artistico')`);
        await queryRunner.query(`CREATE TABLE "artist" ("id" character varying NOT NULL, "photo_url" character varying NOT NULL, "curriculum" character varying, "name" character varying NOT NULL, "social_name" character varying, "artistic_name" character varying, "gender" character varying NOT NULL, "cpf" text, "birthday" TIMESTAMP NOT NULL, "rg" text, "expedition_department" text, "gender_specifics" "public"."artist_gender_specifics_enum" NOT NULL DEFAULT 'prefiro não responder', "sexual_orientation" "public"."artist_sexual_orientation_enum" NOT NULL DEFAULT 'prefiro não dizer', "race" "public"."artist_race_enum" NOT NULL DEFAULT 'nenhuma', "show_name" "public"."artist_show_name_enum" NOT NULL DEFAULT 'nome', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" character varying, CONSTRAINT "REL_3c2c776c0a094c15d6c165494c" UNIQUE ("userId"), CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."address_residency_enum" AS ENUM('df', 'entorno', 'fora df')`);
        await queryRunner.query(`CREATE TABLE "address" ("id" character varying NOT NULL, "city" text, "cep" text, "neighbourhood" text, "number" text, "complement" text, "residency" "public"."address_residency_enum" NOT NULL DEFAULT 'df', "state" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "artistId" character varying, CONSTRAINT "REL_f01b17af2be05c5b2bcf547a73" UNIQUE ("artistId"), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "admin" ("id" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL DEFAULT 'admin', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "PK_e032310bcef831fb83101899b10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password_hash"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "profile_picture_url"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "isVerified" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "user" ADD "banned" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "user" ADD "active" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "user" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`);
        await queryRunner.query(`ALTER TABLE "request" ADD CONSTRAINT "FK_75f23983b423a20777e71c12bf3" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "request" ADD CONSTRAINT "FK_227e30f1fd810f592afd1e16fe1" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_c25f1d5033a8fc3ecebc2e9dc66" FOREIGN KEY ("artistId") REFERENCES "artist"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "certificate" ADD CONSTRAINT "FK_5f27112eba258fe5231814ba378" FOREIGN KEY ("areaId") REFERENCES "area"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "area" ADD CONSTRAINT "FK_7ab6341cb60427d33ce7e107944" FOREIGN KEY ("technicalId") REFERENCES "technical"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "idiom" ADD CONSTRAINT "FK_0acd24eed6d6cd59c0527199b1f" FOREIGN KEY ("technicalId") REFERENCES "technical"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "technical" ADD CONSTRAINT "FK_d1459b519237b8204115086d27e" FOREIGN KEY ("artistId") REFERENCES "artist"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "artist" ADD CONSTRAINT "FK_3c2c776c0a094c15d6c165494c0" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_f01b17af2be05c5b2bcf547a735" FOREIGN KEY ("artistId") REFERENCES "artist"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_f01b17af2be05c5b2bcf547a735"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP CONSTRAINT "FK_3c2c776c0a094c15d6c165494c0"`);
        await queryRunner.query(`ALTER TABLE "technical" DROP CONSTRAINT "FK_d1459b519237b8204115086d27e"`);
        await queryRunner.query(`ALTER TABLE "idiom" DROP CONSTRAINT "FK_0acd24eed6d6cd59c0527199b1f"`);
        await queryRunner.query(`ALTER TABLE "area" DROP CONSTRAINT "FK_7ab6341cb60427d33ce7e107944"`);
        await queryRunner.query(`ALTER TABLE "certificate" DROP CONSTRAINT "FK_5f27112eba258fe5231814ba378"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_c25f1d5033a8fc3ecebc2e9dc66"`);
        await queryRunner.query(`ALTER TABLE "request" DROP CONSTRAINT "FK_227e30f1fd810f592afd1e16fe1"`);
        await queryRunner.query(`ALTER TABLE "request" DROP CONSTRAINT "FK_75f23983b423a20777e71c12bf3"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "active"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "banned"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isVerified"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "profile_picture_url" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password_hash" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "admin"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TYPE "public"."address_residency_enum"`);
        await queryRunner.query(`DROP TABLE "artist"`);
        await queryRunner.query(`DROP TYPE "public"."artist_show_name_enum"`);
        await queryRunner.query(`DROP TYPE "public"."artist_race_enum"`);
        await queryRunner.query(`DROP TYPE "public"."artist_sexual_orientation_enum"`);
        await queryRunner.query(`DROP TYPE "public"."artist_gender_specifics_enum"`);
        await queryRunner.query(`DROP TABLE "technical"`);
        await queryRunner.query(`DROP TYPE "public"."technical_cnpj_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."technical_formation_enum"`);
        await queryRunner.query(`DROP TABLE "idiom"`);
        await queryRunner.query(`DROP TABLE "area"`);
        await queryRunner.query(`DROP TYPE "public"."area_technical_formation_enum"`);
        await queryRunner.query(`DROP TABLE "certificate"`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`DROP TABLE "request"`);
        await queryRunner.query(`DROP TABLE "course"`);
        await queryRunner.query(`DROP TYPE "public"."course_type_enum"`);
    }

}
