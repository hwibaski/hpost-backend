import { Client } from '@src/client/domain/client.domain';

describe('ClientDomain', () => {
  describe('생성 시 email 필드 유효성 검사', () => {
    it('이메일 형식이 아닌 경우 에러를 던진다', () => {
      // given
      const email = 'invalid-email';
      // when & then
      expect(() => new Client(null, email, 'Password123')).toThrow(
        'Invalid email',
      );
    });

    it('이메일 형식인 경우 생성된다', () => {
      // given
      const email = 'test@gmail.com';

      // when
      const client = new Client(null, email, 'Password123');

      // then
      expect(client).toBeDefined();
    });

    it('email이 null일 경우 에러를 던진다.', () => {
      // given
      const email = null as any;

      // when & then
      expect(() => new Client(null, email, 'Password123')).toThrow(
        'Invalid email',
      );
    });
  });

  describe('생성 시 password 필드 유효성 검사', () => {
    it('비밀번호가 6자리 이하인 경우 에러를 던진다', () => {
      // given
      const password = '12345';

      // when & then
      expect(() => new Client(null, 'test@gmail.com', password)).toThrow(
        'Invalid password',
      );
    });

    it('비밀번호가 6자리 이상이고 문자와 숫자가 포함되어 있을 경우 생성된다', () => {
      // given
      const password = 'Password123';

      // when
      const client = new Client(null, 'test@gmail.com', password);

      // then
      expect(client).toBeDefined();
    });

    it('비밀번호가 null일 경우 에러를 던진다.', () => {
      // given
      const password = null as any;

      // when & then
      expect(() => new Client(null, 'test@gmail.com', password)).toThrow(
        'Invalid password',
      );
    });
  });
});
