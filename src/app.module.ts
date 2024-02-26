import { CacheModule } from '@nest/cache-module/cache.module';
import { ConfigModule } from '@nest/config-module/config.module';
import { Module } from '@nestjs/common';

import { PrismaModule } from '@nest/prisma-module/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(), CacheModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
