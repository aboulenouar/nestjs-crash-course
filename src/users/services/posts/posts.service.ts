import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/typeorm/entities/Post';
import { User } from 'src/typeorm/entities/User';
import { CreatePostParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {

    constructor(@InjectRepository(Post) private postRepository: Repository<Post>, @InjectRepository(User) private userRepository: Repository<User>) {}

    async createPost(id: number, createPost: CreatePostParams): Promise<Post> {
        const user = await this.userRepository.findOneBy({id});
        if (!user) {
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        }
        const newPost = this.postRepository.create({...createPost, author: user});
        return this.postRepository.save(newPost);
    }
}
