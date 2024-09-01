import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '~entities/user.entity';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
  ) {}

  async getUser(email: string) {
    return await this.user.findOneBy({ email });
  }

  async createNewUser(email: string, hash: string) {
    return await this.user.insert({ email, hash });
  }
}
