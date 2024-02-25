import { InjectRedis } from '@nestjs-modules/ioredis';
import { Controller, Get } from '@nestjs/common';
import Redis from 'ioredis';

@Controller()
export class AppController {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  @Get()
  async getHello() {
    await this.redis.set('key', 'Redis data!');
    const redisData = await this.redis.get('key');
    return { redisData };
  }
}
