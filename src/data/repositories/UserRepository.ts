import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/userRepository';
import { Endpoint } from '../datasource/endpoint';
import { HttpManager } from '../datasource/interface/HttpManager';
import { UserModel } from '../models/UserModel';

export class UserRepositoryImpl implements UserRepository {
  private _http: HttpManager;

  constructor({ HttpManager }: { HttpManager: HttpManager }) {
    this._http = HttpManager;
  }

  public async getUsers(): Promise<User[]> {
    const usersResponse = await this._http.get(Endpoint.USERS);
    const users = usersResponse.data.map(UserModel.fromRawJson);
    return users.map((b: UserModel) => b.toDomain());
  }
}
