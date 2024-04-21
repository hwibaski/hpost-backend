import { ClientService } from '@src/client/application/service/client.service';
import { anyString, instance, mock, reset, when } from 'ts-mockito';
import { ClientAdapter } from '@src/client/adapter/out/persistence/client.adapter';
import { Client } from '@src/client/domain/client.domain';
import { ClientId } from '@src/client/domain/client-id.domain';

describe('ClientService', () => {
  const clientAdapter = mock(ClientAdapter);
  const service = new ClientService(instance(clientAdapter));

  afterEach(() => {
    reset(clientAdapter);
  });

  describe('클라이언트 중복 확인', () => {
    it('해당하는 이메일의 클라리언트가 없으면 false를 리턴한다.', async () => {
      // given
      when(clientAdapter.findOneByEmail(anyString())).thenResolve(null);

      // when
      const result = await service.exists('test@gmail.com');

      // then
      expect(result).toBe(false);
    });

    it('해당하는 이메일의 클라이언트가 있으면 true를 리턴한다.', async () => {
      // given
      const client = new Client(
        new ClientId('client-id'),
        'test@gmail.com',
        'Password123',
      );

      when(clientAdapter.findOneByEmail(anyString())).thenResolve(client);

      // when
      const result = await service.exists('test@gmail.com');

      // then
      expect(result).toBe(true);
    });
  });
});
