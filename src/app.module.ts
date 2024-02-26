import { Module } from '@nestjs/common';

import { CacheModule } from '@nest/@share/cache/cache.module';
import { ConfigModule } from '@nest/@share/config/config.module';
import { PrismaModule } from '@nest/@share/prisma/prisma.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(), CacheModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
