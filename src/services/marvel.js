import axios from 'axios';

const http = axios.create({
  baseURL: 'http://gateway.marvel.com',
  params: {
    ts: 1,
    apikey: process.env.VUE_APP_MARVEL_APIKEY,
    hash: process.env.VUE_APP_MARVEL_HASH,
  },
});

export default {
  getCharacters() {
    return http.get('/v1/public/characters');
  },
  getCharactersByName(name) {
    return http.get('/v1/public/characters', { params: { name } });
  },
};
