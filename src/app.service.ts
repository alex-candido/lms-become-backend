import { InjectRedis } from '@nestjs-modules/ioredis';
import { Injectable } from '@nestjs/common';

import Redis from 'ioredis';

@Injectable()
export class AppService {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  async getHello(key: string, message: string) {
    await this.redis.set(key, message);
    const server = await this.redis.get(key);
    return { server };
  }
}
