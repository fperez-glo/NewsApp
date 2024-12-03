import { User } from '../../domain/entities/User';

interface ConstructorParams {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export class UserModel {
  id: string;
  name: string;
  email: string;
  phone: string;

  constructor(params: ConstructorParams) {
    this.id = params.id;
    this.name = params.name;
    this.email = params.email;
    this.phone = params.phone;
  }

  static fromRawJson = (rawJson: any): UserModel => {
    const { id, name, email, phone } = rawJson;
    return new UserModel({ id, name, email, phone });
  };
}

declare module './UserModel' {
  interface UserModel {
    toDomain(): User;
  }
}

UserModel.prototype.toDomain = function (): User {
  const data = this;
  return new User(data);
};
