import { action, makeObservable, observable } from 'mobx';
import { GetUsersUseCase } from '../../domain/useCases/user/getUsers';
import { User } from '../../domain/entities/User';

interface Props {
  GetUsersUseCase: GetUsersUseCase;
}

export class UserViewModel {
  private _getUsersUseCase;
  public isLoading: boolean = false;
  public isLoadingDetail: boolean = false;
  public users: User[] = [];

  constructor({ GetUsersUseCase }: Props) {
    makeObservable(this, {
      isLoading: observable,
      isLoadingDetail: observable,
      users: observable,
      setUsers: action,
      setLoading: action,
      setLoadingDetail: action,
    });
    this._getUsersUseCase = GetUsersUseCase;
    this.fetchUsersData();
  }

  public async fetchUsersData() {
    this.setLoading(true);
    try {
      const users = await this._getUsersUseCase.exec();
      this.setUsers(users);
      return users;
    } catch (error) {
      //   console.warn('@@ERROR_ON_FETCH_USERS@@', error);
    } finally {
      this.setLoading(false);
    }
  }

  public setUsers(users: User[]) {
    this.users = users;
  }

  public setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  public setLoadingDetail(isLoading: boolean) {
    this.isLoadingDetail = isLoading;
  }
}
