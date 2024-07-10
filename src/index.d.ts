import { UserSession } from './modules/auth/domain/entities/user-session';

declare global {
  namespace Express {
    interface User extends UserSession {}
  }
}
