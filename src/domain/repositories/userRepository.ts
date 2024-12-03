import { User } from '../entities/User';

export interface UserRepository {
  getUsers(): Promise<User[]>;
}
