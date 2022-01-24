import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1604356784699 implements MigrationInterface {
  name = 'InitialMigration1604356784699'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "animal_example" (
        "id" character varying NOT NULL,
        "name" character varying NOT NULL,
        "rank" integer NOT NULL,
        CONSTRAINT "PK_35975b81c2bcc025316d1c90dfb" PRIMARY KEY ("id")
      )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "animal_example"`);
  }

}
