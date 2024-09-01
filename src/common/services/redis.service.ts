import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  redis: Redis;
  constructor() {
    this.redis = new Redis({ host: 'redis', port: 6379 });
  }

  get = async (key: string) => {
    return await this.redis.get(key);
  };

  expire = async (key: string, seconds) => {
    return await this.redis.expire(key, seconds);
  };

  set = async (key: string, value: any) => {
    return await this.redis.set(key, value);
  };

  setEx = async (key: string, value: string, seconds: number) => {
    return await this.redis.setex(key, seconds, value);
  };

  delete = async (key: string) => {
    return await this.redis.del(key);
  };
}
