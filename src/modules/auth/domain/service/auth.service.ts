import { Result } from '@/.shared/helpers/result';
import { AuthError, AuthResponse } from '@supabase/supabase-js';
import { UserSession } from '../entities/user-session';

export const AuthService = Symbol('AuthService');

export interface AuthService {
  registerUser(
    email: string,
    password: string,
  ): Promise<Result<AuthError | AuthResponse['data']>>;

  login(
    email: string,
    password: string,
  ): Promise<Result<AuthError | AuthResponse['data']>>;

  getUserFromSession(
    access_token: string,
  ): Promise<Result<AuthError | UserSession>>;
}
