import { Module } from '@nestjs/common';

import { CacheModule } from '@nest/@share/cache/cache.module';
import { PrismaModule } from '@nest/@share/prisma/prisma.module';
import { ConfigModule } from '@nest/config/@config.module';

import { ModulesModule } from '@nest/modules/@modules.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(), CacheModule, PrismaModule, ModulesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
