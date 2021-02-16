import http from '@/utils/http';
import marvelService from '@/services/marvel';

jest.mock('@/utils/http');

describe('Marvel service', () => {
  describe('getCharacters', () => {
    beforeEach(() => {
      const fakeResponse = new Promise((resolve) => {
        resolve({ data: {} });
      });
      http.get.mockReturnValue(fakeResponse);
    });

    afterEach(() => {
      http.get.mockReset();
    });

    it('should to return a promise', () => {
      const result = marvelService.getCharacters();
      expect(result instanceof Promise).toBe(true);
    });

    it('should to request characters', () => {
      const expectedData = { data: {} };
      return marvelService.getCharacters()
        .then((data) => {
          expect(data).toEqual(expectedData);
        });
    });

    it('should to call api with a name to search', () => {
      marvelService.getCharactersByName('Hulk');
      const { nameStartsWith } = http.get.mock.calls[0][1].params;
      expect(nameStartsWith).toEqual('Hulk');
    });
  });
});
