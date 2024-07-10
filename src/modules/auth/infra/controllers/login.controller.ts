import { Injectable } from '@nestjs/common';
import { BaseController } from '@shared/infra/types/base-controller';
import { LoginUseCase } from '../../application/use-cases/lgoin.use-case';
import { RegisterUserRequestDTO } from '../dto/request/register-user-request.dto';

type RequestProps = RegisterUserRequestDTO;
type ResponseProps = any;

@Injectable()
export class LoginController
  implements BaseController<RequestProps, ResponseProps>
{
  constructor(private readonly useCase: LoginUseCase) {}
  async execute(dto: RegisterUserRequestDTO) {
    const result = await this.useCase.execute(dto);

    if (result.isFailure) {
      return result.error;
    }

    return result.getValue();
  }
}
