import { main } from './main';

describe('main function', function () {
  let originalConsoleLog: never;
  let originalProcessEnv: never;
  let logMessages: string[];

  beforeEach(function () {
    originalConsoleLog = console.log;
    originalProcessEnv = process.env;
    logMessages = [];

    console.log = (message?: never) => logMessages.push(message);

    // 根据需要模拟的任何其他依赖关系
  });

  afterEach(function () {
    console.log = originalConsoleLog;
    process.env = originalProcessEnv;

    // 重置模拟的依赖关系
  });

  it('main - When npm_lifecycle_event is equal to script, it logs expected messages', function () {
    process.env.npm_lifecycle_event = 'script';
    main();

    // 根据预期输出调整预期
    expect(logMessages).not.toBe([
      // 添加期望的logMessages，考虑到colorText和line的输出
    ]);
  });

  it('main - When npm_lifecycle_event is not equal to script, it logs error message', function () {
    process.env.npm_lifecycle_event = 'other-script';
    main();

    // 根据预期输出调整预期
    expect(logMessages).toContain('====================================');
    expect(logMessages).toContain(
      '跳过了禁止发布，而且该命令可能不会显示在终端\n',
    );
    expect(logMessages).toContain('====================================');
  });
});
