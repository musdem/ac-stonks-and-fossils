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
    public username: string,
    public priceBought: number,
    public turnipsBought: number,
    public fossilsOwned: [string]
  ) {}
}

export class JwtToken {
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
