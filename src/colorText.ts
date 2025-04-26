import { dog } from './dog';
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
  dog('开始计算文本长度');
  /**  安全区空白  */
  const blankSpace = ' '.repeat(safeWidth);
  dog('空白长度为', safeWidth);
  let computerStr = `${blankSpace}${truncateStringWithChar(str, screenWith)}${blankSpace}`;

  dog('计算完毕字符串为', computerStr);

  const strLen = strInTerminalLength(computerStr);

  dog.warn('现在字符串的长度为：', strLen);
  dog.warn('终端共可显示长度为：', screenWith);
  if (strLen < screenWith) {
    computerStr += ' ';
  }

  return computerStr
    .split('')
    .map(char =>
      noColor ? char : pen.number(getRandomInt(1, 225)).bgBlack(char),
    )
    .join('');
}
