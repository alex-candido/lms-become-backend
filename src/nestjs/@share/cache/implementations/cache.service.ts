import { InjectRedis } from '@nestjs-modules/ioredis';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import Redis from 'ioredis';

import { IFieldDTO } from '../dtos/IFieldDTO';
import CacheRepositoryModel from '../model/CacheRepositoryModel';

@Injectable()
export class CacheService implements CacheRepositoryModel {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  set(key: string, value: string | number | Buffer, ttl?: any) {
    return this.redis.set(key, value, ttl);
  }

  get(key: string) {
    return this.redis.get(key);
  }

  delete(key: string) {
    return this.redis.del(key);
  }

  async deleteField(key: string, field: IFieldDTO) {
    const keyFromCache = await this.get(key);
    if (!keyFromCache)
      throw new HttpException(
        'Field ' + field + ' Does not exist',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );

    delete keyFromCache[field];
    return this.set(key, keyFromCache);
  }

  async getField(key: string, field: IFieldDTO) {
    const fieldFromCache = await this.get(key);

    if (!fieldFromCache)
      throw new HttpException(
        'Field ' + field + ' Does not exist',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return fieldFromCache[field];
  }
}
