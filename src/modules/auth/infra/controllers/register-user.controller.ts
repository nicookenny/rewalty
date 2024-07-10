import { Injectable } from '@nestjs/common';
import { BaseController } from '@shared/infra/types/base-controller';
import { RegisterUserUseCase } from '../../application/use-cases/register-user.use-case';
import { RegisterUserRequestDTO } from '../dto/request/register-user-request.dto';

type RequestProps = RegisterUserRequestDTO;
type ResponseProps = any;

@Injectable()
export class RegisterUserController
  implements BaseController<RequestProps, ResponseProps>
{
  constructor(private readonly useCase: RegisterUserUseCase) {}
  async execute(dto: RegisterUserRequestDTO) {
    return this.useCase.execute(dto);
  }
}
