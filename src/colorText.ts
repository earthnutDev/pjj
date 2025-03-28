import { pen } from 'color-pen';
import { noColor } from './command';

/**
 *
 * @description 生成随机颜色文本
 * @param str 字符串
 * @param text 是否不使用颜色
 *
 *
 */
export function colorText(str: string, text: boolean = true) {
  return `${' '.repeat(7)}${str}${' '.repeat(7)}`
    .split('')
    .map(char =>
      noColor
        ? text
          ? char
          : pen.hide(char)
        : text
          ? pen.random.bgBlack(char)
          : pen.random.bgBlack.hide(char),
    )
    .join('');
}
