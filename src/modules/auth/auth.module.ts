import { DatabaseModule } from '@/.shared/infra/database/database.module';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { useCases } from './application/use-cases';
import { AuthController } from './auth.controller';
import { AuthService } from './domain/service/auth.service';
import { controllers } from './infra/controllers';
import { JwtStrategy } from './infra/guards/jwt.strategy';
import { AuthServiceImpl } from './infra/services/auth.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [
    {
      provide: AuthService,
      useClass: AuthServiceImpl,
    },
    JwtStrategy,
    PassportModule,
    ...controllers,
    ...useCases,
  ],
})
export class AuthModule {}
