import { Result } from '@/.shared/helpers/result';
import { AuthError, AuthResponse } from '@supabase/supabase-js';

export const AuthRepository = Symbol('AuthRepository');

export interface AuthRepository {
  registerUser(
    email: string,
    password: string,
  ): Promise<Result<AuthError | AuthResponse['data']>>;

  login(
    email: string,
    password: string,
  ): Promise<Result<AuthError | AuthResponse['data']>>;
}
