import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

export const ormconfig: MysqlConnectionOptions = {
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "migration2",
    logging: true,
    synchronize: true,
    entities: [
        "src/entity/*.entity.js"
    ],
    subscribers: [
        "subscriber/*.js"
    ],
    // entitySchemas: [
    //     "schema/*.json"
    // ],
    migrations: [
        "migration/*.js"
    ],
    // cli: {
    //     entitiesDir: "entity",
    //     migrationsDir: "migration",
    //     subscribersDir: "subscriber"
    // }
}