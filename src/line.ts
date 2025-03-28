import pen from 'color-pen';
import { cn } from './cn';
import { noColor } from './command';

/**
 *
 * @description 生成分割线
 *
 */
export function line() {
  let str = '';
  for (let i = 0; i < (cn ? 54 : 101); i++) {
    str += noColor ? '=' : pen.random('=');
  }
  return str;
}
