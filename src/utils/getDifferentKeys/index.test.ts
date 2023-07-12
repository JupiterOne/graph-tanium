import getDifferentKeys from './index';

describe('getDifferentKeys', () => {
  it('returns an empty array for objects with the same values', () => {
    const a = { a: 1, b: 2, c: 3 };
    const b = { a: 1, b: 2, c: 3 };
    expect(getDifferentKeys(a, b)).toEqual([]);
  });

  it('returns keys with different values', () => {
    const a = { a: 1, b: 2, c: 3 };
    const b = { a: 1, b: 5, c: 3 };
    expect(getDifferentKeys(a, b)).toEqual(['b']);
  });

  it('returns an empty array for empty objects', () => {
    const a = {};
    const b = {};
    expect(getDifferentKeys(a, b)).toEqual([]);
  });

  it('returns an empty array for nested objects with the same values', () => {
    const obj1 = { a: { b: 1 }, c: { d: 2 } };
    const obj2 = { a: { b: 1 }, c: { d: 2 } };
    expect(getDifferentKeys(obj1, obj2)).toEqual([]);
  });

  it('returns keys with different values in nested objects', () => {
    const obj1 = { a: { b: 1 }, c: { d: 2 } };
    const obj2 = { a: { b: 1 }, c: { d: 5 } };
    expect(getDifferentKeys(obj1, obj2)).toEqual(['c']);
  });
});
