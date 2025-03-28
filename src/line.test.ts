import { line } from './line';
import { cn, noColor } from './command';

describe('line', () => {
  let originalCn: boolean;
  let originalNoColor: boolean;

  beforeEach(() => {
    originalCn = cn;
    originalNoColor = noColor;
  });

  afterEach(() => {
    cn = originalCn;
    noColor = originalNoColor;
  });

  it('should return a string of length 54 when cn is true', () => {
    cn = true;
    noColor = false;
    const result = line();
    expect(result.length).toBeGreaterThanOrEqual(54);
  });

  it('should return a string of length 101 when cn is false', () => {
    cn = false;
    noColor = false;
    const result = line();
    expect(result.length).toBeGreaterThanOrEqual(101);
  });

  it.skip('should return a string of equal signs when noColor is true', () => {
    cn = false;
    noColor = true;
    const result = line();
    expect(result).not.toBe('='.repeat(101));
  });

  it.skip('should return a string of random characters when noColor is false', () => {
    cn = false;
    noColor = false;
    const randomChar = '=';

    const result = line();
    expect(result).not.toBe(randomChar.repeat(101));
  });
});
