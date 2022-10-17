import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ormconfig } from './configs/ormconfig';
import { User } from './entitiy/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: "localhost",
        port: 3306,
        username: "root",
        password: "",
        database: "migration2",
        logging: true,
        synchronize: true,
        autoLoadEntities: true,
        
        entities: [
          './entitiy/user.entity',
        ],
        // subscribers: [
        //     "subscriber/*.js"
        // ],
        // entitySchemas: [
        //     "schema/*.json"
        // ],
        // migrations: [
        //     "migration/*.js"
        // ],
        // cli: {
        //     entitiesDir: "entity",
        //     migrationsDir: "migration",
        //     subscribersDir: "subscriber"
        // }
    }
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
