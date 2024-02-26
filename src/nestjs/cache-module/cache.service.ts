import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Field } from './types/field.type';

import { InjectRedis } from '@nestjs-modules/ioredis';

import Redis, { Callback } from 'ioredis';

@Injectable()
export class CacheService {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  set(
    key: string,
    value: string | number | Buffer,
    ttl?: Callback<'OK'> | undefined,
  ) {
    return this.redis.set(key, value, ttl);
  }

  get(key: string) {
    return this.redis.get(key);
  }

  del(key: string) {
    return this.redis.del(key);
  }

  async deleteField(key: string, field: Field) {
    const keyFromCache = await this.get(key);
    if (!keyFromCache)
      throw new HttpException(
        'Field ' + field + ' Does not exist',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );

    delete keyFromCache[field];
    return this.set(key, keyFromCache);
  }

  async getField(key: string, field: Field) {
    const fieldFromCache = await this.get(key);

    if (!fieldFromCache)
      throw new HttpException(
        'Field ' + field + ' Does not exist',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return fieldFromCache[field];
  }
}
