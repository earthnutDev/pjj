import { pen, strInTerminalLength, truncateStringWithChar } from 'color-pen';
import { noColor } from './command';
import { dataStore } from './data-store';
import { getRandomInt } from 'a-js-tools';

/**
 *
 * @description 生成随机颜色文本
 *
 * @param str 字符串
 *
 *
 */
export function colorText(str: string) {
  const { screenWith, safeWidth } = dataStore;
  /**  安全区空白  */
  const blankSpace = ' '.repeat(safeWidth);

  const computerStr = `${blankSpace}${truncateStringWithChar(str, screenWith)}${blankSpace}`;

  const strLen = strInTerminalLength(computerStr);

  if (strLen < screenWith) {
    computerStr.concat(' ');
  }

  return computerStr
    .split('')
    .map(char =>
      noColor ? char : pen.number(getRandomInt(1, 225)).bgBlack(char),
    )
    .join('');
}
