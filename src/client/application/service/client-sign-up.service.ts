import { ConflictException, Injectable } from '@nestjs/common';
import { ClientService } from '@src/client/application/service/client.service';
import { SaveClientPort } from '@src/client/application/port/out/save-client.port';
import { Client } from '@src/client/domain/client.domain';
import { ClientSignUpUseCase } from '@src/client/application/port/in/client-sign-up.usecase';
import { ClientSignUpCommand } from '@src/client/application/port/in/client-sign-up.command';

@Injectable()
export class ClientSignUpService implements ClientSignUpUseCase {
  constructor(
    private readonly clientService: ClientService,
    private readonly saveClientPort: SaveClientPort,
  ) {}

  async signUp(command: ClientSignUpCommand) {
    if (await this.clientService.exists(command.email)) {
      throw new ConflictException('user already exists');
    }

    const newUser = new Client(null, command.email, command.password);

    return await this.saveClientPort.save(newUser);
  }
}
