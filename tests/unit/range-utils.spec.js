import range from '@/utils/range';

describe('range', () => {
  it('should return an numeric range from 1 to 5 (excluding 5)', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4]);
  });

  it('should return an empty array when first argument is greater or equal than second', () => {
    expect(range(20, 10)).toEqual([]);
  });
});
