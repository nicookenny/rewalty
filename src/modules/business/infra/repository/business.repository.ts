import { SupabaseService } from '@/.shared/infra/database/database.impl';
import { Injectable } from '@nestjs/common';
import { BusinessRepository } from '../../domain/repository/business.repository';

@Injectable()
export class BusinessRepositoryImpl implements BusinessRepository {
  constructor(private readonly supabase: SupabaseService) {}

  async create(business: any) {
    return business;
  }
}
