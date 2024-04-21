import { anyString, anything, instance, mock, reset, when } from 'ts-mockito';
import { ClientService } from '@src/client/application/service/client.service';
import { ClientSignUpService } from '@src/client/application/service/client-sign-up.service';
import { ClientSignUpCommand } from '@src/client/application/port/in/client-sign-up.command';
import { ClientId } from '@src/client/domain/client-id.domain';
import { ClientAdapter } from '@src/client/adapter/out/persistence/client.adapter';

describe('ClientSignUpService', () => {
  const clientService = mock(ClientService);
  const clientAdapter = mock(ClientAdapter);

  const service = new ClientSignUpService(
    instance(clientService),
    instance(clientAdapter),
  );

  afterEach(() => {
    reset(clientService);
    reset(clientAdapter);
  });

  describe('회원가입', () => {
    it('이미 가입된 이메일이 있을 경우 예외를 반환한다.', async () => {
      // given
      when(clientService.exists(anyString())).thenResolve(true);
      const command = new ClientSignUpCommand('test@gmail.com', 'Password123');

      // when & then
      expect(async () => {
        await service.signUp(command);
      }).rejects.toThrow('user already exists');
    });

    it('가입된 이메일이 없을 경우 새로운 회원을 저장한다.', async () => {
      // given
      when(clientService.exists(anyString())).thenResolve(false);
      when(clientAdapter.save(anything())).thenResolve(
        new ClientId('client-id'),
      );
      const command = new ClientSignUpCommand('test@gmail.com', 'Password123');

      // when
      const result = await service.signUp(command);

      // then
      expect(result).toEqual(new ClientId('client-id'));
    });
  });
});
