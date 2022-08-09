import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { RanduserService} from './randuser.service';

@Controller('randuser')
export class RanduserController {
    constructor(private randuserService: RanduserService) {}

    @Get('/random')
    async getRandom(@Res() res) {
        const name = await this.randuserService.getRanduserName();
        return res.status(HttpStatus.OK).json(name);
    }
}
