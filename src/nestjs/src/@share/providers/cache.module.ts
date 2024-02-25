import { RedisModule } from '@nestjs-modules/ioredis';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CONFIG_SCHEMA_TYPE } from '../../config/config.module';

@Module({
  imports: [
    RedisModule.forRootAsync({
      useFactory: async (config: ConfigService<CONFIG_SCHEMA_TYPE>) => {
        if (config.get('REDIS_PASS')) {
          return {
            type: 'single',
            options: {
              port: config.get('REDIS_PORT'),
              host: config.get('REDIS_HOST'),
              username: config.get('REDIS_USER'),
              password: config.get('REDIS_PASS'),
            },
          };
        }
        throw new Error('Unsupported database config');
      },
      inject: [ConfigService],
    }),
  ],
})
export class CacheModule {}
