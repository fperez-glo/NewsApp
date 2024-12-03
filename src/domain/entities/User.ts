interface UserParams {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export class User {
  id: string;
  name: string;
  email: string;
  phone: string;

  constructor(params: UserParams) {
    this.id = params.id;
    this.name = params.name;
    this.email = params.email;
    this.phone = params.phone;
  }
}
