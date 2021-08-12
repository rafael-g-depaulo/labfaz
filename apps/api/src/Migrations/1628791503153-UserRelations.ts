import {MigrationInterface, QueryRunner} from "typeorm";

export class UserRelations1628791503153 implements MigrationInterface {
    name = 'UserRelations1628791503153'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "active" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" character varying NOT NULL, "whatsapp" character varying NOT NULL, "twitter" character varying NOT NULL, "facebook" character varying NOT NULL, "instagram" character varying NOT NULL, "linkedin" character varying NOT NULL, "tiktok" character varying NOT NULL, "youtube" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "artistId" character varying, CONSTRAINT "REL_c25f1d5033a8fc3ecebc2e9dc6" UNIQUE ("artistId"), CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "certificate" ("id" character varying NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "areaId" character varying, CONSTRAINT "PK_8daddfc65f59e341c2bbc9c9e43" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "curriculum" ("id" character varying NOT NULL, "url" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "areaId" character varying, CONSTRAINT "PK_ea7cdfd52edbddc8d7352e2a747" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "area_technical_formation_enum" AS ENUM('autodidata', 'curso especializado', 'tecnico', 'tecnologica', 'universitaria')`);
        await queryRunner.query(`CREATE TABLE "area" ("id" character varying NOT NULL, "technical_formation" "area_technical_formation_enum" NOT NULL DEFAULT 'autodidata', "name" character varying NOT NULL, "started_year" character varying NOT NULL, "describe" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "technicalId" character varying, CONSTRAINT "PK_39d5e4de490139d6535d75f42ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "idiom" ("id" character varying NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "technicalId" character varying, CONSTRAINT "PK_62cb75850e3e4e96d21d8fbbe08" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "technical_formation_enum" AS ENUM('não tem', 'ensino fundamental 1', 'ensino fundamental 2', 'ensino médio', 'ensino médio tecnico', 'curso superior', 'pos')`);
        await queryRunner.query(`CREATE TABLE "technical" ("id" character varying NOT NULL, "formation" "technical_formation_enum" NOT NULL DEFAULT 'não tem', "is_drt" boolean NOT NULL DEFAULT false, "is_ceac" boolean NOT NULL DEFAULT false, "is_cnpj" boolean NOT NULL DEFAULT false, "is_affiliated" boolean NOT NULL DEFAULT false, "want_be_affiliated" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "artistId" character varying, CONSTRAINT "REL_d1459b519237b8204115086d27" UNIQUE ("artistId"), CONSTRAINT "PK_0071c7d8a6bae24482194122df9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "artist_race_enum" AS ENUM('nenhuma', 'branca', 'preta', 'parda', 'amarela', 'indigena')`);
        await queryRunner.query(`CREATE TYPE "artist_show_name_enum" AS ENUM('nome', 'nome social', 'nome artistico')`);
        await queryRunner.query(`CREATE TABLE "artist" ("id" character varying NOT NULL, "photo_url" character varying NOT NULL, "name" character varying NOT NULL, "social_name" character varying NOT NULL, "artistic_name" character varying NOT NULL, "gender" character varying NOT NULL, "cpf" character varying NOT NULL, "birthday" TIMESTAMP NOT NULL, "rg" character varying NOT NULL, "expedition_department" character varying NOT NULL, "is_trans" boolean NOT NULL, "race" "artist_race_enum" NOT NULL DEFAULT 'nenhuma', "show_name" "artist_show_name_enum" NOT NULL DEFAULT 'nome', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" character varying, CONSTRAINT "REL_3c2c776c0a094c15d6c165494c" UNIQUE ("userId"), CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "address_residency_enum" AS ENUM('df', 'entorno', 'fora df')`);
        await queryRunner.query(`CREATE TABLE "address" ("id" character varying NOT NULL, "city" character varying NOT NULL, "cep" character varying NOT NULL, "neighbourhood" character varying NOT NULL, "number" integer NOT NULL, "complement" character varying NOT NULL, "residency" "address_residency_enum" NOT NULL DEFAULT 'df', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "artistId" character varying, CONSTRAINT "REL_f01b17af2be05c5b2bcf547a73" UNIQUE ("artistId"), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_c25f1d5033a8fc3ecebc2e9dc66" FOREIGN KEY ("artistId") REFERENCES "artist"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "certificate" ADD CONSTRAINT "FK_5f27112eba258fe5231814ba378" FOREIGN KEY ("areaId") REFERENCES "area"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "curriculum" ADD CONSTRAINT "FK_27e4d236a93a98164af1c610774" FOREIGN KEY ("areaId") REFERENCES "area"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
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
        await queryRunner.query(`ALTER TABLE "curriculum" DROP CONSTRAINT "FK_27e4d236a93a98164af1c610774"`);
        await queryRunner.query(`ALTER TABLE "certificate" DROP CONSTRAINT "FK_5f27112eba258fe5231814ba378"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_c25f1d5033a8fc3ecebc2e9dc66"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TYPE "address_residency_enum"`);
        await queryRunner.query(`DROP TABLE "artist"`);
        await queryRunner.query(`DROP TYPE "artist_show_name_enum"`);
        await queryRunner.query(`DROP TYPE "artist_race_enum"`);
        await queryRunner.query(`DROP TABLE "technical"`);
        await queryRunner.query(`DROP TYPE "technical_formation_enum"`);
        await queryRunner.query(`DROP TABLE "idiom"`);
        await queryRunner.query(`DROP TABLE "area"`);
        await queryRunner.query(`DROP TYPE "area_technical_formation_enum"`);
        await queryRunner.query(`DROP TABLE "curriculum"`);
        await queryRunner.query(`DROP TABLE "certificate"`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
