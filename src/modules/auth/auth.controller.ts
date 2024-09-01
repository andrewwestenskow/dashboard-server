import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Session,
  UseGuards,
} from '@nestjs/common';
import { SuccessResponse } from '~responses/success.response';
import { AuthService } from './auth.service';
import { AuthRequestDto } from './auth.types';

@Controller('auth')
@UseGuards()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('session')
  async getUserSession(@Session() session) {
    return session;
  }

  @Post('register')
  async register(@Body() body: AuthRequestDto, @Session() session) {
    const { email, password } = body;

    const { id } = await this.authService.register(email, password);
    session.userId = id;

    return new SuccessResponse('User created successfully', id);
  }

  @Post('login')
  async login(@Body() body: AuthRequestDto, @Session() session) {
    const { email, password } = body;
    const id = await this.authService.login(email, password);

    session.userId = id;

    return new SuccessResponse('Logged in', id);
  }

  @Delete('logout')
  async logout(@Session() session) {
    session.destroy();

    return new SuccessResponse('Logged Out');
  }
}
