import { Result } from '@/.shared/helpers/result';
import { Inject, Injectable } from '@nestjs/common';
import { AuthRepository } from '../../domain/repository/auth.repository';
import { RegisterUserRequestDTO } from '../../infra/dto/request/register-user-request.dto';

@Injectable()
export class RegisterUserUseCase {
  constructor(
    @Inject(AuthRepository)
    private readonly authRepository: AuthRepository,
  ) {}

  async execute(dto: RegisterUserRequestDTO) {
    const { email, password } = dto;

    const result = await this.authRepository.registerUser(email, password);

    if (result.isFailure) {
      return Result.fail(result.error);
    }

    return Result.ok(result.getValue());
  }
}
