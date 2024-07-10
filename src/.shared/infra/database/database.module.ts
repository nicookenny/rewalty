import { Module, OnModuleInit } from '@nestjs/common';
import { SupabaseService } from './database.impl';

@Module({
  providers: [SupabaseService],
  exports: [SupabaseService],
})
export class DatabaseModule implements OnModuleInit {
  constructor(private readonly supabase: SupabaseService) {}

  async onModuleInit() {
    await this.supabase.connect();
  }
}
