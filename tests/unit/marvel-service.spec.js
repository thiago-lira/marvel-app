import http from '@/utils/http';
import marvelService from '@/services/marvel';

jest.mock('@/utils/http');

describe('Marvel service', () => {
  const characterId = 1017325;
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
      const promise = marvelService.getCharacterById(characterId);
      expect(promise instanceof Promise).toBe(true);
    });

    it('should to fetch a character passing id', () => {
      marvelService.getCharacterById(characterId);
      expect(http.get.mock.calls[0][0]).toContain(`characters/${characterId}`);
    });
  });

  describe('getComicsByCharacterId', () => {
    it('should receive a promise', () => {
      const promise = marvelService.getComicsByCharacterId(characterId);
      expect(promise instanceof Promise).toBe(true);
    });

    it('should to fetch characters comic passing id, limit = 10, and onsaleDate order by', () => {
      marvelService.getComicsByCharacterId(characterId);
      expect(http.get.mock.calls[0][0]).toContain(`characters/${characterId}/comics?limit=10&orderBy=-onsaleDate`);
    });
  });
});
