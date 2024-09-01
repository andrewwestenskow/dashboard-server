import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthRequestDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ type: String, example: 'email@domain.com' })
  email: string;

  @IsNotEmpty()
  @ApiProperty({ type: String, example: 'superGoodPassword' })
  password: string;
}
