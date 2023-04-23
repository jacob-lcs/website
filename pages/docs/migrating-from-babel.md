# 从 Babel 迁移

SWC 的 [编译](/docs/configuration/compilation) 旨在支持所有 ECMAScript 特性。SWC CLI 旨在成为 Babel 的直接替代品：

```plaintext
$ npx babel # 旧指令
$ npx swc # 新指令
```

SWC 支持 **所有处于 stage 3 提案** 和 preset-env，包括错误修复的 transformer
