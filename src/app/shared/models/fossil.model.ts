export class FossilAd {
  constructor(
    public name: string,
    public username: string,
    public selling: boolean,
    public itemId: string,
    public price: number
  ) {}
}

export class PostFossilAd {
  constructor(
    public token: string,
    public key: string,
    public selling: boolean,
    public itemId: string,
    public price: number
  ) {}
}

export class PostSuccess {
  constructor(
    public status: string,
    public itemId: string
  ) {}
}

export class RemoveFossil {
  constructor(
    public token: string,
    public key: string,
    public itemId: string
  ) {}
}

export class UpdateFossil {
  constructor(
    public token: string,
    public key: string,
    public itemIds: [string]
  ) {}
}

export class RemoveUpdateSuccess {
  constructor(
    public status: string,
    public name: string
  ) {}
}
