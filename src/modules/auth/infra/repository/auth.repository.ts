import { Result } from '@/.shared/helpers/result';
import { SupabaseService } from '@/.shared/infra/database/database.impl';
import { Injectable } from '@nestjs/common';
import { AuthResponse } from '@supabase/supabase-js';
import { AuthRepository } from '../../domain/repository/auth.repository';

@Injectable()
export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly supabase: SupabaseService) {}

  async registerUser(email: string, password: string) {
    const { error, data } = await this.supabase.instance.auth.signUp({
      email,
      password,
    });

    if (error) {
      return Result.fail<AuthResponse['error']>(error);
    }

    return Result.ok<AuthResponse['data']>(data);
  }

  async login(email: string, password: string) {
    const { error, data } =
      await this.supabase.instance.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      return Result.fail<AuthResponse['error']>(error);
    }
    return Result.ok<AuthResponse['data']>(data);
  }
}
