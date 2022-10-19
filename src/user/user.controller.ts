import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { User } from '../entitiy/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()

    getAll() {
        return this.userService.getAll();
    }

    @Post()
    @ApiResponse({
        status: 300,
        description: 'hhhh'
    })
    create(@Body() user: User) {
        return this.userService.create(user);
    }
}
