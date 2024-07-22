import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { Profile } from './typeorm/entities/Profile';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'crashcourse',
    password: 'bTeohmeN6hSe',
    database: 'crashcourse',
    entities: [User, Profile],
    synchronize: true,
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}