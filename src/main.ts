import pen from 'color-pen';
import { colorText } from './colorText';
import { message, script } from './command';
import { line } from './line';
import { _p } from 'a-node-tools';

/**
 *  空行
 */
const space = '\n'.repeat(3);
/**
 * 主程序入口
 */
export function main() {
  if (process && process.env && process.env.npm_lifecycle_event === script) {
    _p(space);
    _p(line());

    _p(colorText(message, false));
    _p(colorText(message, false));
    _p(colorText(message));
    _p(colorText(message, false));
    _p(colorText(message, false));
    _p(line());
    _p(space);

    end();
  } else {
    const m = '     所以，看见这段文本，说明你哪里 ❌ 了     ';
    _p('====================================');
    _p('跳过了禁止发布，而且该命令可能不会显示在终端\n');
    _p(pen.hide.brightRed.bgBlack(m));
    _p(pen.bold.blink.brightRed.bgBlack(m));
    _p(pen.hide.brightRed.bgBlack(m));
    _p('\n====================================');
  }
}

/**    命令结束回调  */
export const end = () => process.exit(1);
