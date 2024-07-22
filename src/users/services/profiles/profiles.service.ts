import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/entities/Profile';
import { User } from 'src/typeorm/entities/User';
import { CreateProfileParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class ProfilesService {

    constructor(@InjectRepository(Profile) private profileRepository: Repository<Profile>, @InjectRepository(User) private userRepository: Repository<User>) {}

    async createProfile(id: number, createProfile: CreateProfileParams) {
        const user = await this.userRepository.findOneBy({id});
        if (!user) {
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        }
        const newProfile = this.profileRepository.create({...createProfile});
        const savedProfile = await this.profileRepository.save(newProfile);
        user.profile = savedProfile;
        return this.userRepository.save(user);
    }
}
