import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserSession } from '../../domain/entities/user-session';
import { AuthService } from '../../domain/service/auth.service';

type JwtPayload = UserSession;

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    readonly configService: ConfigService,
    @Inject(AuthService)
    readonly authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: configService.get('ENVIRONMENT') === 'development',
      secretOrKey: '---',
    });
  }

  async validate(payload: JwtPayload) {
    this.success(payload);
  }

  async authenticate(req: Request) {
    const token = req.headers.authorization?.split(' ')[1];
    const userIdOrError = await this.authService.getUserFromSession(token);
    if (userIdOrError.isFailure)
      return this.fail(new UnauthorizedException(), 401);

    const user = userIdOrError.getValue() as UserSession;

    this.validate(user);
  }
}
