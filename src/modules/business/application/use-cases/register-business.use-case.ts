import { Inject, Injectable, Scope } from '@nestjs/common';
import { BaseUseCase } from '@shared/domain/use-case';
import { Result } from '@shared/helpers/result';
import { Business } from '../../domain/entities/business';
import { BusinessRepository } from '../../domain/repository/business.repository';

type UseCaseProps = any;
type Response = Promise<Result<any>>;

@Injectable({
  scope: Scope.REQUEST,
})
export class RegisterBusinessUseCase
  implements BaseUseCase<UseCaseProps, Response>
{
  constructor(
    @Inject(BusinessRepository)
    private readonly businessRepository: BusinessRepository,
  ) {}

  async execute(props: any) {
    const business = Business.create(props);

    return Result.ok(business);
  }
}
