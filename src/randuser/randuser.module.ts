import { Module } from '@nestjs/common';
import { RanduserController } from './randuser.controller';
import { RanduserService } from './randuser.service';

@Module({
    imports: [],
    controllers: [RanduserController],
    providers: [RanduserService],
})
export class RanduserModule {}
