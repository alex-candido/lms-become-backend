import { RedisModule } from '@nestjs-modules/ioredis';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { cacheManagerOptions } from '../@share/configs/cache.option';
@Module({
  imports: [
    RedisModule.forRootAsync({
      ...cacheManagerOptions,
      inject: [ConfigService],
    }),
  ],
})
export class CacheModule {}
