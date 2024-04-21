import { ClientSignUpCommand } from '@src/client/application/port/in/client-sign-up.command';
import { ClientId } from '@src/client/domain/client-id.domain';

export abstract class ClientSignUpUseCase {
  abstract signUp(client: ClientSignUpCommand): Promise<ClientId>;
}
