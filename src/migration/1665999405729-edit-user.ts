import { MigrationInterface, QueryRunner } from "typeorm"

export class editUser1665999405729 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE \`user\` ADD \`age\` int NOT NULL`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE \`user\` DROP COLUMN \`age\``
        );
    }

}
