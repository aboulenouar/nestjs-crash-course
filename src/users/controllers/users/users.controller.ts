import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { User } from 'src/typeorm/entities/User';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UpdateUserDto } from 'src/users/dtos/update-user.dto';
import { UsersService } from 'src/users/services/users/users.service';

type UserWithoutPassword = Omit<User, 'password'>;

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    const users = await this.usersService.getUsers();
    return users
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserWithoutPassword> {
    const { confirmPassword, ...userParams } = createUserDto;
    const user = await this.usersService.createUser(userParams);
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  @Patch(':id')
  async updateUserById(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto): Promise<UserWithoutPassword> {
    const user = await this.usersService.updateUserById(id, updateUserDto);
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.usersService.deleteUserById(id);
  }
}
