import { ConflictException, Injectable } from '@nestjs/common';
import {
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common/exceptions';
import * as bcrypt from 'bcryptjs';
import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async register(email: string, password: string) {
    const existingUser = await this.authRepository.getUser(email);

    console.log(existingUser);

    if (existingUser) {
      throw new ConflictException('A user with that email already exists');
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = await this.authRepository.createNewUser(email, hash);

    return newUser.identifiers[0];
  }

  async login(email: string, password: string) {
    const user = await this.authRepository.getUser(email);

    if (!user) {
      throw new NotFoundException('No user is registered with that email');
    }

    const isPasswordCorrect = bcrypt.compareSync(password, user.hash);

    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Email or password incorrect');
    }

    return user.id;
  }
}
