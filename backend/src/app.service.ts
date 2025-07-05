import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getHello(): Promise<string> {
    await this.cacheManager.set('hello', 'world', 60);
    const value = await this.cacheManager.get('hello');
    return `Cached Value: ${value}`;
  }
}
