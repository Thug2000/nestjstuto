import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { RanduserService} from './randuser.service';

@Controller('randuser')
export class RanduserController {
    constructor(private randuserService: RanduserService) {}

    @Get('/random')
    async getRandom(): Promise<string> {
        const name = await this.randuserService.getRanduserName();
        return name;
    }

    @Get('/fromurl')
    async getFromUrl(@Res() res) {
        const user = await this.randuserService.getUserFromUrl();
        return res.status(HttpStatus.OK).json(user);
    }
}
