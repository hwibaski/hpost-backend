import { Injectable } from '@nestjs/common';
import { FindClientPort } from '@src/client/application/port/out/find-client.port';

@Injectable()
export class ClientService {
  constructor(private readonly findClientPort: FindClientPort) {}

  async exists(email: string): Promise<boolean> {
    const client = await this.findClientPort.findOneByEmail(email);

    if (!client) {
      return false;
    }

    return true;
  }
}
