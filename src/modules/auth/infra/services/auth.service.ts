import { Result } from '@/.shared/helpers/result';
import { SupabaseService } from '@/.shared/infra/database/database.impl';
import { Injectable } from '@nestjs/common';
import { AuthResponse } from '@supabase/supabase-js';
import { UserSession } from '../../domain/entities/user-session';
import { AuthService } from '../../domain/service/auth.service';

@Injectable()
export class AuthServiceImpl implements AuthService {
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

  async getUserFromSession(access_token: string) {
    const { error, data } =
      await this.supabase.instance.auth.getUser(access_token);

    if (error) {
      return Result.fail<AuthResponse['error']>(error);
    }

    if (!data.user) {
      return Result.fail<AuthResponse['error']>({ message: 'User not found' });
    }

    const { data: profile } = await this.supabase.instance
      .from('profiles')
      .select()
      .eq('user_id', data.user.id)
      .single();

    return Result.ok<UserSession>({
      id: data.user.id,
      email: data.user.email,
      profile,
    });
  }
}
