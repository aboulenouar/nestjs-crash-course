import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Post as UserPost} from 'src/typeorm/entities/Post';
import { CreatePostDto } from 'src/users/dtos/create-post.dto';
import { PostsService } from 'src/users/services/posts/posts.service';

@Controller('posts')
export class PostsController {

    constructor(private postsService: PostsService) {}

    @Post(':id')
    createPost(@Param('id', ParseIntPipe) id: number, @Body() createPostDto: CreatePostDto): Promise<UserPost> {
        return this.postsService.createPost(id, createPostDto);
    }
}
