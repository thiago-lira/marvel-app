import { expect } from 'chai';
import sinon from 'sinon';
import localstorage from '@/utils/localstorage';

global.localStorage = { getItem() {}, setItem() {} };
const stubSetItem = sinon.stub(localStorage, 'setItem').callsFake(() => {});
const stubGetItem = sinon.stub(localStorage, 'getItem').callsFake(() => '{}');
const lsTest = localstorage('lsTest', []);

describe('localstorage utils', () => {
  it('should to set value in localStorage', () => {
    lsTest.set('Ok');
    expect(stubSetItem.getCall(0).args[1]).to.contains('Ok');
  });

  it('should to get value in localStorage', () => {
    lsTest.get();
    expect(stubGetItem.calledWith('lsTest')).to.equal(true);
  });
});
