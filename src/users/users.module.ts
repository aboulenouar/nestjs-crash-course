import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { ProfilesController } from './controllers/profiles/profiles.controller';
import { ProfilesService } from './services/profiles/profiles.service';
import { Profile } from 'src/typeorm/entities/Profile';

@Module({
  controllers: [UsersController, ProfilesController],
  providers: [UsersService, ProfilesService],
  imports: [TypeOrmModule.forFeature([User, Profile])]
})
export class UsersModule {

}
