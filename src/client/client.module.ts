import { Module } from '@nestjs/common';
import { ClientAdapter } from './adapter/out/persistence/client.adapter';
import { ClientService } from './application/service/client.service';
import { ClientSignUpService } from './application/service/client-sign-up.service';
import { FindClientPort } from './application/port/out/find-client.port';
import { SaveClientPort } from './application/port/out/save-client.port';

@Module({
  imports: [],
  controllers: [],
  providers: [
    ClientService,
    ClientSignUpService,
    { provide: FindClientPort, useClass: ClientAdapter },
    { provide: SaveClientPort, useClass: ClientAdapter },
  ],
  exports: [],
})
export class ClientModule {}
