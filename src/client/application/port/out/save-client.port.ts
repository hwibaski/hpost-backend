import { Client } from '@src/client/domain/client.domain';
import { ClientId } from '@src/client/domain/client-id.domain';

export abstract class SaveClientPort {
  abstract save(client: Client): Promise<ClientId>;
}
