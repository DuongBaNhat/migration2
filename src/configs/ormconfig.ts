import { User } from "src/entitiy/user.entity";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

export const ormconfig: MysqlConnectionOptions = {
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "migration2",
    logging: true,
    synchronize: false,
    
    entities: [
       User
    ],
    // migrationsRun: false,
 
    // migrations: [
    //     'src/migration/*.ts'
    // ]
}