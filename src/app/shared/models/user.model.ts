export class User {
  constructor(
    public name: string,
    public username: string,
    public priceBought: number,
    public turnipsBought: number,
    public fossilsOwned: [string]
  ) {}
}
