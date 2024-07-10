import { Result } from '@/.shared/helpers/result';
import { Inject, Injectable } from '@nestjs/common';
import { AuthService } from '../../domain/service/auth.service';
import { RegisterUserRequestDTO } from '../../infra/dto/request/register-user-request.dto';

@Injectable()
export class RegisterUserUseCase {
  constructor(
    @Inject(AuthService)
    private readonly authService: AuthService,
  ) {}

  async execute(dto: RegisterUserRequestDTO) {
    const { email, password } = dto;

    const result = await this.authService.registerUser(email, password);

    if (result.isFailure) {
      return Result.fail(result.error);
    }

    return Result.ok(result.getValue());
  }
}
