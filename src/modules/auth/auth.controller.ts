import { Body, Controller, Post } from '@nestjs/common';
import { LoginController } from './infra/controllers/login.controller';
import { RegisterUserController } from './infra/controllers/register-user.controller';
import { LoginRequestDTO } from './infra/dto/request/login-request.dto';
import { RegisterUserRequestDTO } from './infra/dto/request/register-user-request.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerUserController: RegisterUserController,
    private readonly loginController: LoginController,
  ) {}

  @Post('register')
  async register(@Body() dto: RegisterUserRequestDTO) {
    return this.registerUserController.execute(dto);
  }

  @Post('login')
  async login(@Body() dto: LoginRequestDTO) {
    return this.loginController.execute(dto);
  }
}
