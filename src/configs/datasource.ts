import { User } from "src/entitiy/user.entity";
import { DataSource } from "typeorm";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

//for migration
export const ormconfig = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'migration2',
    logging: true,
    // autoLoadEntities: true,
    // synchronize: false,
    // entities: [
    //     'src/entity/*.entity.ts'
    // ],
    migrationsRun: false,
    // subscribers: [
    //     "src/subscriber/*.js"
    // ],
    // entitySchemas: [
    //     "schema/*.json"
    // ],
    migrations: [
        'src/migration/*.ts'
    ],
    // cli: {
    //     entitiesDir: "entity",
    //     migrationsDir: "migration",
    //     subscribersDir: "subscriber"
    // }
})