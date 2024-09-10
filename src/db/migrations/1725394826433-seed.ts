import { MigrationInterface, QueryRunner } from "typeorm";

export class Seed1725394826433 implements MigrationInterface {
    name = 'Seed1725394826433'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying(255) NOT NULL, "hash" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."task_frequency_enum" AS ENUM('0', '1', '2', '3')`);
        await queryRunner.query(`CREATE TYPE "public"."task_duerange_enum" AS ENUM('0', '1', '2', '3')`);
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "description" text, "frequency" "public"."task_frequency_enum" NOT NULL, "frequencyId" integer NOT NULL, "dueRange" "public"."task_duerange_enum" NOT NULL, "startOn" date NOT NULL DEFAULT now(), "expires" date, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "task"`);
        await queryRunner.query(`DROP TYPE "public"."task_duerange_enum"`);
        await queryRunner.query(`DROP TYPE "public"."task_frequency_enum"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
