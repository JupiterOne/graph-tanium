import isEqual from 'lodash/isEqual';

export default function getDifferentKeys(
  a: Record<string, unknown>,
  b: Record<string, unknown>,
): string[] {
  const differentKeys: string[] = [];

  for (const key in a) {
    if (key in a && key in b && !isEqual(a[key], b[key])) {
      differentKeys.push(key);
    }
  }

  return differentKeys;
}
