export class Toast {
  timeout: number;
  constructor(
    public message: string,
    timeout: number,
    public success: boolean
  ) {
    this.timeout = timeout * 1000;
  }
}
