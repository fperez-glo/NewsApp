import { User } from '../../domain/entities/User';

interface ConstructorParams {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

export class UserModel {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;

  constructor(params: ConstructorParams) {
    this.id = params.id;
    this.firstname = params.firstname;
    this.lastname = params.lastname;
    this.email = params.email;
    this.phone = params.phone;
  }

  static fromRawJson = (rawJson: any): UserModel => {
    const { id, firstname, lastname, email, phone } = rawJson;
    return new UserModel({ id, firstname, lastname, email, phone });
  };
}

declare module './UserModel' {
  interface UserModel {
    toDomain(): User;
  }
}

UserModel.prototype.toDomain = function (): User {
  const data = this;
  return new User({ ...data, name: `${data.firstname} ${data.lastname}` });
};
