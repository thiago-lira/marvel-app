import http from '@/utils/http';

export default {
  getCharacters(params = {}) {
    return http.get('/v1/public/characters', { params });
  },
  getCharactersByName(name) {
    return http.get('/v1/public/characters', { params: { nameStartsWith: name } });
  },
  getCharacterById(id) {
    return http.get(`/v1/public/characters/${id}`);
  },
  getComicsByCharacterId(id) {
    return http.get(`/v1/public/characters/${id}/comics?limit=10&orderBy=onsaleDate`);
  },
};
