import RedisStore from 'connect-redis';
import { Redis } from 'ioredis';

export class SessionStore {
  sessionStore: RedisStore;
  constructor() {
    const client = new Redis({ host: 'redis', port: 6379 });

    this.sessionStore = new RedisStore({
      client,
      prefix: 'overwatch-session:',
    });
  }
}
