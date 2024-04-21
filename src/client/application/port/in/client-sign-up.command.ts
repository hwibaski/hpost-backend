export class ClientSignUpCommand {
  constructor(
    readonly email: string,
    readonly password: string,
  ) {}
}
