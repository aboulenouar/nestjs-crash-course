import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(): any {
      return [{ id: 1, username: 'macron' }, { id: 2, username: 'trump' }];
    }

    @Get('macron')
    getUserMacron(): any {
        return { id: 1, username: 'macron' };
    }
}
