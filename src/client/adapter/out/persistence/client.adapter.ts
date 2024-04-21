import { Injectable } from '@nestjs/common';
import { FindClientPort } from '@src/client/application/port/out/find-client.port';
import { SaveClientPort } from '@src/client/application/port/out/save-client.port';
import { Client } from '@src/client/domain/client.domain';
import { ClientId } from '@src/client/domain/client-id.domain';

@Injectable()
export class ClientAdapter implements FindClientPort, SaveClientPort {
  async findOneByEmail(email: string): Promise<Client | null> {
    return new Client(new ClientId('1'), 'hwibaski@gmail.com', '123456');
  }

  async save(client: Client): Promise<ClientId> {
    return new ClientId('1');
  }
}
