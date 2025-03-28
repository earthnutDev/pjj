import { pen } from 'color-pen';

import { Command } from 'a-command';

/**  创建一个命令  */
const command = new Command('bvn');

const cn = process.env.LANG?.toLocaleLowerCase().includes('zh');

command
  .bind({
    'message <-m> (添加自定义的命令消息)': [],
    'black <-b> (显示为黑色（默认）文本)': [],
    'script <-s> (触发的勾子，默认为 prepublishOnly)': [],
  })
  .run().isEnd.end;

/**
 *  命令参数映射
 */
const argMap = command.args.$map;

/**
 *  命令参数值
 */
const message =
  argMap.message && argMap.message.value && argMap.message.value.length > 0
    ? argMap.message.value.join('\n')
    : cn
      ? '禁止在项目的根目录下执行 npm publish 命令'
      : 'It is forbidden to execute the npm publish command in the root directory of the project';

/// 没有颜色
const noColor = argMap.black !== undefined;

const script =
  argMap.script && argMap.script.value && argMap.script.value.length > 0
    ? argMap.script.value[0]
    : 'prepublishOnly';

/**    命令结束回调  */
const end = () => process.exit(1);

/**
 *  空行
 */
const space = '\n'.repeat(3);

const line = () => {
  let str = '';
  for (let i = 0; i < (cn ? 54 : 101); i++) {
    str += noColor ? '=' : pen.random('=');
  }
  return str;
};

const colorText = (str: string, text: boolean = true) =>
  `${' '.repeat(7)}${str}${' '.repeat(7)}`
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
/**
 * 主程序入口
 */
function main() {
  console.log(space);
  console.log(line());

  console.log(colorText(message, false));
  console.log(colorText(message, false));
  console.log(colorText(message));
  console.log(colorText(message, false));
  console.log(colorText(message, false));
  console.log(line());
  console.log(space);

  end();
}

if (process && process.env && process.env.npm_lifecycle_event === script)
  main();
else {
  const m = '     所以，看见这段文本，说明你哪里 ❌ 了     ';
  console.log('====================================');
  console.log('跳过了禁止发布，而且该命令可能不会显示在终端\n');
  console.log(pen.hide.brightRed.bgBlack(m));
  console.log(pen.bold.blink.brightRed.bgBlack(m));
  console.log(pen.hide.brightRed.bgBlack(m), '\n');
  console.log('====================================');
}
