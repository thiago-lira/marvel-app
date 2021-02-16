import localstorage from '@/utils/localstorage';

const lsTest = localstorage('lsTest', []);

describe('localstorage utils', () => {
  beforeEach(() => {
    jest.spyOn(Storage.prototype, 'setItem');
    jest.spyOn(Storage.prototype, 'getItem');
  });

  afterEach(() => {
    localStorage.setItem.mockRestore();
  });

  it('should to set value in localStorage', () => {
    lsTest.set([]);
    expect(global.localStorage.setItem).toHaveBeenCalledWith('lsTest', '[]');
  });

  it('should to get value in localStorage', () => {
    lsTest.get();
    expect(global.localStorage.getItem).toHaveBeenCalledWith('lsTest');
  });
});
