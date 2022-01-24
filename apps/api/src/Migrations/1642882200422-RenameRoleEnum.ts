import { MigrationInterface, QueryRunner } from "typeorm"

export class RenameRoleEnum1642882200422 implements MigrationInterface {
    name = 'RenameRoleEnum1642882200422'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."user_role_enum" RENAME TO "user_role_enum_old"`)
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('non-logged-user', 'logged-user')`)
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" DROP DEFAULT`)
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" TYPE "public"."user_role_enum" USING "role"::"text"::"public"."user_role_enum"`)
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'logged-user'`)
        await queryRunner.query(`DROP TYPE "public"."user_role_enum_old"`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum_old" AS ENUM('non-logged-user', 'logger-user')`)
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" DROP DEFAULT`)
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" TYPE "public"."user_role_enum_old" USING "role"::"text"::"public"."user_role_enum_old"`)
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'logger-user'`)
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`)
        await queryRunner.query(`ALTER TYPE "public"."user_role_enum_old" RENAME TO "user_role_enum"`)
    }

}
