import { _p } from 'a-node-tools';
import pen from 'color-pen';
import { dataStore } from './data-store';
import { noColor } from './command';

/**
 *
 * 打印一个空白的黑色背景
 *
 */
export function blackSpace() {
  if (noColor) {
    _p();
  } else {
    const str = ' '.repeat(dataStore.screenWith);
    _p(pen.bgBlack(str));
  }
}
