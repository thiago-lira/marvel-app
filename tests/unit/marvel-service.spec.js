import { expect } from 'chai';
import sinon from 'sinon';
import marvelService from '@/services/marvel';

const fakeResponse = new Promise((resolve) => resolve({ data: {} }));
const stubGetCharactersByName = sinon.stub(marvelService, 'getCharactersByName').returns(fakeResponse);
sinon.stub(marvelService, 'getCharacters').returns(fakeResponse);

describe('Marvel service', () => {
  describe('getCharacters', () => {
    it('should to return a promise', () => {
      const result = marvelService.getCharacters();
      expect(result).to.be.a('promise');
    });

    it('should to request characters', () => {
      const expectedData = { data: {} };
      return marvelService.getCharacters()
        .then((data) => {
          expect(data).to.eql(expectedData);
        });
    });

    it('should to call api with a name to search', () => {
      marvelService.getCharactersByName('Hulk');
      expect(stubGetCharactersByName.calledWith('Hulk')).to.equal(true);
    });
  });
});
