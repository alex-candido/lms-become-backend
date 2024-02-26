import { Module } from '@nestjs/common';

import { CacheModule } from '@nestjs/cache-module/cache.module';
import { ConfigModule } from '@nestjs/config-module/config.module';
import { PrismaModule } from '@nestjs/prisma-module/prisma.module';

@Module({
  imports: [ConfigModule.forRoot(), CacheModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
