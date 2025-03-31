# pjj

[![version](<https://img.shields.io/npm/v/pjj.svg?logo=npm&logoColor=rgb(0,0,0)&label=版本号&labelColor=rgb(73,73,228)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/pjj) [![NPM Last Update](<https://img.shields.io/npm/last-update/pjj?logo=npm&label=版本最后更新&labelColor=rgb(255,36,63)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/pjj) [![📦 size](<https://img.shields.io/bundlephobia/minzip/pjj.svg?logo=npm&label=压缩包大小&labelColor=rgb(201,158,140)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/pjj) [![downloads](<https://img.shields.io/npm/dm/pjj.svg?logo=npm&logoColor=rgb(0,0,0)&label=月下载量&labelColor=rgb(194,112,210)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/pjj) [![downloads](<https://img.shields.io/npm/dt/pjj.svg?logo=npm&label=总下载量&labelColor=rgb(107,187,124)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/pjj)

[![last commit](<https://img.shields.io/github/last-commit/earthnutDev/pjj.svg?logo=github&logoColor=rgb(0,0,0)&label=最后推码&labelColor=rgb(255,165,0)&color=rgb(0,0,0)>)](https://github.com/earthnutDev/pjj) [![GitHub commit activity](<https://img.shields.io/github/commit-activity/y/earthnutDev/pjj.svg?logo=github&label=推码数&labelColor=rgb(128,0,128)&color=rgb(0,0,0)>)](https://github.com/earthnutDev/pjj) [![Coverage Status](<https://img.shields.io/coverallsCoverage/github/earthnutDev/pjj?logo=coveralls&label=coveralls&labelColor=rgb(12, 244, 39)&color=rgb(0,0,0)>)](https://coveralls.io/github/earthnutDev/pjj?branch=main) [![codecov](<https://img.shields.io/codecov/c/github/earthnutDev/pjj/main?logo=codecov&label=codecov&labelColor=rgb(7, 245, 245)&color=rgb(0,0,0)>)](https://codecov.io/gh/earthnutDev/pjj)

[![查看 📔 日志](<https://img.shields.io/badge/👀-日_%20_志-rgb(0,125,206)>)](https://github.com/earthnutDev/pjj/blob/main/CHANGELOG.md) [![bug 🙋‍♂️ 提交](<https://img.shields.io/badge/☣️-bug_%20_提交-rgb(255,0,63)>)](https://github.com/earthnutDev/pjj/issues)

---

_发现个更简单的方法，直接在 `package.json` 中添加 `private: true` 更简单粗暴_

禁止在项目的根目录执行 npm publish，防止意外发布。该脚本命令仅允许在 `prepublishOnly` ` 钩子中执行。

因为我的项目都是打包到 `dist` 目录下，然后再 `cd dist` 在 dist 目录下执行 `npm publish`，所以需要禁止在根目录执行 `npm publish`。

因为偶尔会忘记在 `dist` 目录下执行 `npm publish`，所以需要该脚本命令。

_我构建后的 `package.json` 🀄️不包含 `scripts` 字段，所以仅考虑根目录禁止执行 `npm publish`_

## 安装

```bash
npm install --save-dev pjj
```

## 使用

### 常规使用

```json
{
  "scripts": {
    "prepublishOnly": "pjj"
  }
}
```

### 替换掉默认文本

```json
{
  "scripts": {
    "prepublishOnly": "pjj -m '请在 dist 目录下执行 npm publish'"
  }
}
```

### 替换掉默认文本并使用黑色（默认）文本颜色

```json
{
  "scripts": {
    "prepublishOnly": "pjj -m '请在 dist 目录下执行 npm publish' -b"
  }
}
```

需要注意

- 添加了 `-s` 命令用于替换默认 prepublishOnly，但是还不知道怎么用，慎用
- 在使用命令 `pjj` 时，需保证在项目中进行了安装
- 只要将该命令配置到 `"prepublishOnly": "pjj"` 时，总会在执行 `npm publish` 时阻止执行 `npm publish`
- 该命令仅适用于 `npm publish`
- 使用该命令请不要使用 `npx` 调用，除非配置 `-s npx` 命令

```json
{
  "scripts": {
    "prepublishOnly": "npx pjj -s npx"
  }
}
```

## 文档地址

参看 [https://earthnut.dev/pjj/](https://earthnut.dev/pjj/)
