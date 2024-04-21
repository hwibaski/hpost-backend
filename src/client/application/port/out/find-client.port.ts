import { Client } from '@src/client/domain/client.domain';

export abstract class FindClientPort {
  abstract findOneByEmail(email: string): Promise<Client | null>;
}
