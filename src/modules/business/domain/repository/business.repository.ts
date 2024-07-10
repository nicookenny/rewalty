import { Business } from '../entities/business';

export interface BusinessRepository {
  create: (business: Business) => Promise<Business>;
}

export const BusinessRepository = Symbol('BusinessRepository');
