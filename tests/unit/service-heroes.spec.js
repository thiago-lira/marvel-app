import service from '@/services/heroes';

describe('Heroes service', () => {
  describe('ascSort method', () => {
    it('should do ascending sort', () => {
      const heroes = [
        { name: 'Loverine' },
        { name: 'Bulk' },
      ];
      const expected = [
        { name: 'Bulk' },
        { name: 'Loverine' },
      ];
      expect(service.sort({ heroes })).toEqual(expected);
    });
  });

  describe('descSort method', () => {
    it('should do descending sort', () => {
      const heroes = [
        { name: 'Bulk' },
        { name: 'Mpider-San' },
      ];
      const expected = [
        { name: 'Mpider-San' },
        { name: 'Bulk' },
      ];
      expect(service.sort({ heroes, isAsc: false })).toEqual(expected);
    });
  });
});
