import { CONFIG_SCHEMA_TYPE } from '@nest/config-module/config.module';
import { RedisModuleAsyncOptions } from '@nestjs-modules/ioredis';
import { ConfigService } from '@nestjs/config';

export const cacheManagerOptions: RedisModuleAsyncOptions = {
  useFactory: async (config: ConfigService<CONFIG_SCHEMA_TYPE>) => {
    return {
      type: 'single',
      options: {
        port: config.get('REDIS_PORT'),
        host: config.get('REDIS_HOST'),
        username: config.get('REDIS_USER'),
        password: config.get('REDIS_PASS'),
      },
    };
  },
};
