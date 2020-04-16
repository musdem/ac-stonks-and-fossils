export class Stonk {
  constructor(
    public name: string,
    public username: string,
    public price: number
  ) {}
}

export class SellStonks {
  constructor(
    public token: string,
    public price: string
  ) {}
}

export class BuyStonks {
  constructor(
    public token: string,
    public stonksBought: number,
    public stonksPrice: number
  ) {}
}

export class StonkSuccess {
  constructor(
    public status: string,
    public user: string,
    public username: string
  ) {}
}
