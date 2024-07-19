import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { hashPassword } from 'src/users/utils/bcrypt';
import { CreateUserParams, UpdateUserParams } from 'src/users/utils/types';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}
    
    getUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    createUser(userParams: CreateUserParams): Promise<User> {
        const hashedPassword = hashPassword(userParams.password);
        const newUser = this.userRepository.create({...userParams, password: hashedPassword, created_at: new Date()});
        return this.userRepository.save(newUser);
    }

    async updateUserById(id: number, userParams: UpdateUserParams): Promise<User> {
        await this.userRepository.update({id}, {...userParams, updated_at: new Date()});
        return this.userRepository.findOneBy({id});
    }

    deleteUserById(id: number): Promise<DeleteResult> {
        return this.userRepository.delete({id});
    }
}
