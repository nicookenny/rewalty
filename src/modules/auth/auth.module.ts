import { DatabaseModule } from '@/.shared/infra/database/database.module';
import { Module } from '@nestjs/common';
import { useCases } from './application/use-cases';
import { AuthController } from './auth.controller';
import { AuthRepository } from './domain/repository/auth.repository';
import { controllers } from './infra/controllers';
import { AuthRepositoryImpl } from './infra/repository/auth.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [
    {
      provide: AuthRepository,
      useClass: AuthRepositoryImpl,
    },
    ...controllers,
    ...useCases,
  ],
})
export class AuthModule {}
