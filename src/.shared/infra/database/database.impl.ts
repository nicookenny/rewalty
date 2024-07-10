import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { EnvKeys } from '../../domain/types/env';

@Injectable()
export class SupabaseService {
  private client: SupabaseClient;
  constructor(private readonly configService: ConfigService) {}

  async connect() {
    try {
      const url = this.configService.get(EnvKeys.SUPABASE_URL);
      const key = this.configService.get(EnvKeys.SUPABASE_KEY);

      this.client = createClient(url, key);
    } catch (error) {
      console.log('Error connecting to Supabase', error);
    }
  }

  get instance() {
    return this.client;
  }
}
