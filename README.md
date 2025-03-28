# bvn

[![version](<https://img.shields.io/npm/v/bvn.svg?logo=npm&logoColor=rgb(0,0,0)&label=版本号&labelColor=rgb(73,73,228)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/bvn) [![NPM Last Update](<https://img.shields.io/npm/last-update/bvn?logo=npm&label=版本最后更新&labelColor=rgb(255,36,63)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/bvn) [![📦 size](<https://img.shields.io/bundlephobia/minzip/bvn.svg?logo=npm&label=压缩包大小&labelColor=rgb(201,158,140)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/bvn) [![downloads](<https://img.shields.io/npm/dm/bvn.svg?logo=npm&logoColor=rgb(0,0,0)&label=月下载量&labelColor=rgb(194,112,210)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/bvn) [![downloads](<https://img.shields.io/npm/dt/bvn.svg?logo=npm&label=总下载量&labelColor=rgb(107,187,124)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/bvn)

[![last commit](<https://img.shields.io/github/last-commit/earthnutDev/bvn.svg?logo=github&logoColor=rgb(0,0,0)&label=最后推码&labelColor=rgb(255,165,0)&color=rgb(0,0,0)>)](https://github.com/earthnutDev/bvn) [![GitHub commit activity](<https://img.shields.io/github/commit-activity/y/earthnutDev/bvn.svg?logo=github&label=推码数&labelColor=rgb(128,0,128)&color=rgb(0,0,0)>)](https://github.com/earthnutDev/bvn) [![Coverage Status](<https://img.shields.io/coverallsCoverage/github/earthnutDev/bvn?logo=coveralls&label=coveralls&labelColor=rgb(12, 244, 39)&color=rgb(0,0,0)>)](https://coveralls.io/github/earthnutDev/bvn?branch=main) [![codecov](<https://img.shields.io/codecov/c/github/earthnutDev/bvn/main?logo=codecov&label=codecov&labelColor=rgb(7, 245, 245)&color=rgb(0,0,0)>)](https://codecov.io/gh/earthnutDev/bvn)

[![查看 📔 日志](<https://img.shields.io/badge/👀-日_%20_志-rgb(0,125,206)>)](https://github.com/earthnutDev/bvn/blob/main/CHANGELOG.md) [![bug 🙋‍♂️ 提交](<https://img.shields.io/badge/☣️-bug_%20_提交-rgb(255,0,63)>)](https://github.com/earthnutDev/bvn/issues)

---

_发现个更简单的方法，直接在 `package.json` 中添加 `private: true` 更简单粗暴_

禁止在项目的根目录执行 npm publish，防止意外发布。该脚本命令仅允许在 `prepublishOnly` ` 钩子中执行。

因为我的项目都是打包到 `dist` 目录下，然后再 `cd dist` 在 dist 目录下执行 `npm publish`，所以需要禁止在根目录执行 `npm publish`。

因为偶尔会忘记在 `dist` 目录下执行 `npm publish`，所以需要该脚本命令。

_我构建后的 `package.json` 🀄️不包含 `scripts` 字段，所以仅考虑根目录禁止执行 `npm publish`_

## 安装

```bash
npm install bvn --save-dev
```

## 使用

### 常规使用

```json
{
  "scripts": {
    "prepublishOnly": "npx bvn"
  }
}
```

### 替换掉默认文本

```json
{
  "scripts": {
    "prepublishOnly": "npx bvn -m '请在 dist 目录下执行 npm publish'"
  }
}
```

### 替换掉默认文本并使用黑色（默认）文本颜色

```json
{
  "scripts": {
    "prepublishOnly": "npx bvn -m '请在 dist 目录下执行 npm publish' -b"
  }
}
```

_添加了 `-s` 命令用于替换默认 prepublishOnly，但是还不知道怎么用，慎用_

## 文档地址

参看 [https://earthnut.dev/bvn/](https://earthnut.dev/bvn/)
