import { UseCase } from '../../useCase';
import { GetUsersResponse } from './response';
import { GetUsersRequest } from './request';
import { UserRepository } from '../../../repositories/userRepository';

export class GetUsersUseCase implements UseCase<GetUsersRequest, GetUsersResponse> {
  private _repository;
  constructor({ UserRepository }: { UserRepository: UserRepository }) {
    this._repository = UserRepository;
  }

  exec() {
    return this._repository.getUsers();
  }
}
