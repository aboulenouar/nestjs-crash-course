import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'crashcourse',
    password: 'bTeohmeN6hSe',
    database: 'crashcourse',
    entities: [User],
    synchronize: true,
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}

// DOCKER COMMAND TO RUN MYSQL
// docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=rootpass -e MYSQL_DATABASE=crashcourse -e MYSQL_USER=crashcourse -e MYSQL_PASSWORD=bTeohmeN6hSe -p 3306:3306 -d mysql

// DOCKER COMMAND TO GET INSIDE MYSQL CONTAINER
//docker exec -it mysql-container mysql -uroot -prootpass