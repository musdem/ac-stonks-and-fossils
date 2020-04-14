export class FossilAd {
  constructor(
    public name: string,
    public fossilId: string,
    public price: number
  ) {}
}

export class PostFossilAd {
  constructor(
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
    public itemId: string
  ) {}
}

export class UpdateFossil {
  constructor(
    public itemIds: [string]
  ) {}
}

export class RemoveUpdateSuccess {
  constructor(
    public status: string,
    public name: string
  ) {}
}
