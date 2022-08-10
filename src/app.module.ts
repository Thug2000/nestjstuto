import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RanduserController } from './randuser/randuser.controller';
import { RanduserService } from './randuser/randuser.service';
import { RanduserModule } from './randuser/randuser.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [RanduserModule, UserModule, PrismaModule],
  controllers: [AppController, RanduserController],
  providers: [AppService, RanduserService],
})
export class AppModule {}
