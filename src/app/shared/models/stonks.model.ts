export class Stonk {
  constructor(
    public name: string,
    public price: number
  ) {}
}

export class SellStonks {
  constructor(
    public token: string,
    public key: string,
    public name: string,
    public price: string
  ) {}
}

export class BuyStonks {
  constructor(
    public token: string,
    public key: string,
    public stonksBought: number,
    public stonksPrice: number
  ) {}
}

export class StonkSuccess {
  constructor(
    public status: string,
    public user: string
  ) {}
}
