export class ClientId {
  private _value: string;

  constructor(value: string) {
    if (!value) throw new Error('Invalid client id');

    this._value = value;
  }
}
