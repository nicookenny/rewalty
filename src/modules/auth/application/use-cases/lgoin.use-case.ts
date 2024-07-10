import { BaseUseCase } from '@/.shared/domain/use-case';
import { Result } from '@/.shared/helpers/result';
import { Inject, Injectable } from '@nestjs/common';
import { AuthError, AuthResponse } from '@supabase/supabase-js';
import { AuthRepository } from '../../domain/repository/auth.repository';
import { RegisterUserRequestDTO } from '../../infra/dto/request/register-user-request.dto';
import { LoginResponseDTO } from '../../infra/dto/response/login-response.dto';

type RequestProps = RegisterUserRequestDTO;
type ResponseProps = Promise<Result<LoginResponseDTO | AuthError>>;

@Injectable()
export class LoginUseCase implements BaseUseCase<RequestProps, ResponseProps> {
  constructor(
    @Inject(AuthRepository)
    private readonly authRepository: AuthRepository,
  ) {}

  async execute(dto: RegisterUserRequestDTO) {
    const { email, password } = dto;

    const resultOrError = await this.authRepository.login(email, password);

    if (resultOrError.isFailure) {
      const error = resultOrError.getError() as AuthError;
      return Result.fail<AuthError>(error);
    }

    const {
      session: { access_token, refresh_token },
      user: { id },
    } = resultOrError.getValue() as AuthResponse['data'];

    return Result.ok<LoginResponseDTO>({
      access_token,
      refresh_token,
      user: {
        id,
      },
    });
  }
}
