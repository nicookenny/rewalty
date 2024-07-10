import { DatabaseModule } from '@/.shared/infra/database/database.module';
import { Module } from '@nestjs/common';
import { useCases } from './application/use-cases';
import { BusinessController } from './business.controller';
import { BusinessRepository } from './domain/repository/business.repository';
import { controllers } from './infra/controllers';
import { BusinessRepositoryImpl } from './infra/repository/business.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [BusinessController],
  providers: [
    ...controllers,
    ...useCases,
    {
      provide: BusinessRepository,
      useClass: BusinessRepositoryImpl,
    },
  ],
})
export class BusinessModule {}
