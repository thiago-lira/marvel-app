import http from '@/utils/http';

export default {
  getCharacters() {
    return http.get('/v1/public/characters');
  },
  getCharactersByName(name) {
    return http.get('/v1/public/characters', { params: { nameStartsWith: name } });
  },
};
