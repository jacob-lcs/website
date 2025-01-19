# 从 Babel 迁移

SWC 的 [编译](/docs/configuration/compilation) 旨在支持所有 ECMAScript 功能。SWC CLI 旨在成为 Babel 的替代品：

```plaintext
$ npx babel # 旧
$ npx swc # 新
```

SWC 支持 **所有 stage 3 提案**，以及 preset-env，包括 bugfix 转换。
