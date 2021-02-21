import http from '@/utils/http';
import marvelService from '@/services/marvel';

jest.mock('@/utils/http');

describe('Marvel service', () => {
  beforeEach(() => {
    const fakeResponse = new Promise((resolve) => {
      resolve({ data: {} });
    });
    http.get.mockReturnValue(fakeResponse);
  });

  afterEach(() => {
    http.get.mockReset();
  });

  describe('getCharacters', () => {
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
  });

  describe('getCharactersByName', () => {
    it('should to call api with a name to search', () => {
      marvelService.getCharactersByName('Hulk');
      const { nameStartsWith } = http.get.mock.calls[0][1].params;
      expect(nameStartsWith).toEqual('Hulk');
    });
  });

  describe('getCharacterById', () => {
    it('should to return a promise', () => {
      const promise = marvelService.getCharacterById(1017325);
      expect(promise instanceof Promise).toBe(true);
    });

    it('should to fetch a character passing id', () => {
      const characterId = 1017325;
      marvelService.getCharacterById(characterId);
      expect(http.get.mock.calls[0][0]).toContain(`characters/${characterId}`);
    });
  });
});
