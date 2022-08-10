import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {};

    @Get()
    async findAll(){
        return this.userService.findAll();
    }

    @Get('/random')
    async getFromUrl(@Res() res) {
        const user = await this.userService.getUserRandom();
        return res.status(HttpStatus.OK).json(user);
    }
}
