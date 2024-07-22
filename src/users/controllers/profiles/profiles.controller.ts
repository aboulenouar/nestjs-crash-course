import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateProfileDto } from 'src/users/dtos/create-profile.dto';
import { ProfilesService } from 'src/users/services/profiles/profiles.service';

@Controller('profiles')
export class ProfilesController {

    constructor(private profilesService: ProfilesService) {}

    @Post(':id')
    createProfile(@Param('id', ParseIntPipe) id: number, @Body() createProfileDto: CreateProfileDto) {
        return this.profilesService.createProfile(id, createProfileDto);
    }
}
