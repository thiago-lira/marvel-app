import service from '@/services/heroes';

describe('Heroes service', () => {
  describe('ascSort method', () => {
    it('should do ascending sort', () => {
      const data = [
        { name: 'Loverine' },
        { name: 'Bulk' },
      ];
      const expectedData = [
        { name: 'Bulk' },
        { name: 'Loverine' },
      ];
      expect(service.ascSort(data)).toEqual(expectedData);
    });
  });

  describe('descSort method', () => {
    it('should do descending sort', () => {
      const data = [
        { name: 'Bulk' },
        { name: 'Mpider-San' },
      ];
      const expectedData = [
        { name: 'Mpider-San' },
        { name: 'Bulk' },
      ];
      expect(service.descSort(data)).toEqual(expectedData);
    });
  });
});
