import { Injectable } from '@nestjs/common';
import { BaseController } from '@shared/infra/types/base-controller';
import { RegisterBusinessUseCase } from '../../application/use-cases/register-business.use-case';
import { RegisterBusinessRequestDTO } from '../dto/request/register-business-request.dto';

type RequestProps = RegisterBusinessRequestDTO;
type ResponseProps = any;

@Injectable()
export class RegisterBusinessController
  implements BaseController<RequestProps, ResponseProps>
{
  constructor(private readonly useCase: RegisterBusinessUseCase) {}
  async execute(dto: RegisterBusinessRequestDTO) {
    return this.useCase.execute(dto);
  }
}
