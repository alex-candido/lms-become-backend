import { RedisModule } from '@nestjs-modules/ioredis';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { CacheManagerConfig } from '@nest/@share/config/implementations/cache.config';

@Module({
  imports: [
    RedisModule.forRootAsync({
      ...CacheManagerConfig,
      inject: [ConfigService],
    }),
  ],
})
export class CacheModule {}
