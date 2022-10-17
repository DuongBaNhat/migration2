import { MigrationInterface, QueryRunner } from "typeorm"

export class createUser1665979457779 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`DROP "user" IF EXISTS getStats`);
        await queryRunner.query(
            `CREATE TABLE \`user\`(\`id\` int NOT NULL AUTO_INCREMENT, 
            \`fname\` varchar(255) NOT NULL, 
            PRIMARY KEY(\`id\`)) ENGINE = InnoDB`
        );
        // await queryRunner.query(`CREATE TABLE \`category\ (\`id\` varchar(36) NOT NULL, \`createdOnDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`createdByUserId\` varchar(255) NULL, \`lastModifiedOnDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`lastModifiedByUserId\` varchar(255) NULL, \`deletedAt\` datetime(6) NULL, \`categoryName\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
