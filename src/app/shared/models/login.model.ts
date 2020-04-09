export class Create {
  constructor(
    public username: string,
    public password: string,
    public name: string
  ) {}
}

export class CreateResponse {
  constructor(
    public status: string,
    public user: string
  ) {}
}

export class Login {
  constructor(
    public username: string,
    public password: string
  ) {}
}

export class LoginResponse {
  constructor(
    public status: string,
    public token: string,
    public name: string,
    public priceBought: number,
    public turnipsBought: number
  ) {}
}

export class JtwToken {
  constructor(
    public token: string,
    public key: string
  ) {}
}

export class PubKey {
  constructor(
    public key: string
  ) {}
}
