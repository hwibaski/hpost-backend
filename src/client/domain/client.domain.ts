import { ClientId } from '@src/client/domain/client-id.domain';

export class Client {
  private _id: ClientId | null;
  private _email: string;
  private _password: string;

  constructor(_id: ClientId | null, email: string, password: string) {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!emailRegex.test(email)) throw new Error('Invalid email');
    if (!passwordRegex.test(password)) throw new Error('Invalid password');

    this._id = _id;
    this._email = email;
    this._password = password;
  }
}
