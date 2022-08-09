import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RanduserController } from './randuser/randuser.controller';
import { RanduserService } from './randuser/randuser.service';
import { RanduserModule } from './randuser/randuser.module';

@Module({
  imports: [RanduserModule],
  controllers: [AppController, RanduserController],
  providers: [AppService, RanduserService],
})
export class AppModule {}
