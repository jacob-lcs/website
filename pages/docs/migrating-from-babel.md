# 从 Babel 迁移

SWC 的 [编译](/docs/configuration/compilation) 旨在支持所有 ECMAScript 特性。SWC CLI 旨在成为 Babel 的直接替代品：

```plaintext
$ npx babel # 旧指令
$ npx swc # 新指令
```

## 对比

这张表概述了 SWC 与 Babel 的不同。

| babel 包名称                                             |        swc        |
| -------------------------------------------------------- | :---------------: |
| babel-plugin-external-helpers                            |        ✔️         |
| babel-plugin-proposal-async-generator-functions          |        ✔️         |
| babel-plugin-proposal-class-properties                   |        ✔️         |
| babel-plugin-proposal-decorators                         |        ✔️         |
| babel-plugin-proposal-do-expressions                     |   ❌ (stage 1)    |
| babel-plugin-proposal-dynamic-import                     |        ✔️         |
| babel-plugin-proposal-export-default-from                |        ✔️         |
| babel-plugin-proposal-export-namespace-from              |        ✔️         |
| babel-plugin-proposal-function-bind                      |   ❌ (stage 0)    |
| babel-plugin-proposal-function-sent                      |   ❌ (stage 2)    |
| babel-plugin-proposal-json-strings                       |        ✔️         |
| babel-plugin-proposal-logical-assignment-operators       |   ❌ (stage 1)    |
| babel-plugin-proposal-nullish-coalescing-operator        |        ✔️         |
| babel-plugin-proposal-numeric-separator                  |        ✔️         |
| babel-plugin-proposal-object-rest-spread                 |        ✔️         |
| babel-plugin-proposal-optional-catch-binding             |        ✔️         |
| babel-plugin-proposal-optional-chaining                  |        ✔️         |
| babel-plugin-proposal-partial-application                |   ❌ (stage 1)    |
| babel-plugin-proposal-pipeline-operator                  |   ❌ (stage 0)    |
| babel-plugin-proposal-private-methods                    |        ✔️         |
| babel-plugin-proposal-throw-expressions                  |   ❌ (stage 2)    |
| babel-plugin-proposal-unicode-property-regex             |        ❌         |
| babel-plugin-syntax-async-generators                     |        ✔️         |
| babel-plugin-syntax-bigint                               |        ✔️         |
| babel-plugin-syntax-class-properties                     |        ✔️         |
| babel-plugin-syntax-decorators                           |        ✔️         |
| babel-plugin-syntax-do-expressions                       |   ❌ (stage 1)    |
| babel-plugin-syntax-dynamic-import                       |        ✔️         |
| babel-plugin-syntax-export-default-from                  |        ✔️         |
| babel-plugin-syntax-export-namespace-from                |        ✔️         |
| babel-plugin-syntax-flow                                 |        ❌         |
| babel-plugin-syntax-function-bind                        |   ❌ (stage 0)    |
| babel-plugin-syntax-function-sent                        |   ❌ (stage 2)    |
| babel-plugin-syntax-import-meta                          | ❌ (stage 3, wip) |
| babel-plugin-syntax-json-strings                         |        ✔️         |
| babel-plugin-syntax-jsx                                  |        ✔️         |
| babel-plugin-syntax-logical-assignment-operators         |   ❌ (stage 1)    |
| babel-plugin-syntax-nullish-coalescing-operator          |        ✔️         |
| babel-plugin-syntax-numeric-separator                    |        ✔️         |
| babel-plugin-syntax-object-rest-spread                   |        ✔️         |
| babel-plugin-syntax-optional-catch-binding               |        ✔️         |
| babel-plugin-syntax-optional-chaining                    |        ✔️         |
| babel-plugin-syntax-partial-application                  |   ❌ (stage 1)    |
| babel-plugin-syntax-pipeline-operator                    |   ❌ (stage 0)    |
| babel-plugin-syntax-throw-expressions                    |   ❌ (stage 2)    |
| babel-plugin-syntax-top-level-await                      |        ✔️         |
| babel-plugin-syntax-typescript                           |        ✔️         |
| babel-plugin-transform-arrow-functions                   |        ✔️         |
| babel-plugin-transform-async-to-generator                |        ✔️         |
| babel-plugin-transform-block-scoped-functions            |        ✔️         |
| babel-plugin-transform-block-scoping                     |        ✔️         |
| babel-plugin-transform-classes                           |        ✔️         |
| babel-plugin-transform-computed-properties               |        ✔️         |
| babel-plugin-transform-destructuring                     |        ✔️         |
| babel-plugin-transform-dotall-regex                      |        ❌         |
| babel-plugin-transform-duplicate-keys                    |        ✔️         |
| babel-plugin-transform-exponentiation-operator           |        ✔️         |
| babel-plugin-transform-flow-comments                     |        ❌         |
| babel-plugin-transform-flow-strip-types                  |        ❌         |
| babel-plugin-transform-for-of                            |        ✔️         |
| babel-plugin-transform-function-name                     |        ✔️         |
| babel-plugin-transform-instanceof                        |        ✔️         |
| babel-plugin-transform-jscript                           |        ❌         |
| babel-plugin-transform-literals                          |        ✔️         |
| babel-plugin-transform-member-expression-literals        |        ✔️         |
| babel-plugin-transform-modules-amd                       |        ✔️         |
| babel-plugin-transform-modules-commonjs                  |        ✔️         |
| babel-plugin-transform-modules-systemjs                  |        ❌         |
| babel-plugin-transform-modules-umd                       |        ✔️         |
| babel-plugin-transform-named-capturing-groups-regex      |        ❌         |
| babel-plugin-transform-new-target                        |        ❌         |
| babel-plugin-transform-object-assign                     |        ❌         |
| babel-plugin-transform-object-set-prototype-of-to-assign |        ❌         |
| babel-plugin-transform-object-super                      |        ❌         |
| babel-plugin-transform-object-rest-spread                |        ✔️         |
| babel-plugin-transform-parameters                        |        ✔️         |
| babel-plugin-transform-property-literals                 |        ✔️         |
| babel-plugin-transform-property-mutators                 |        ❌         |
| babel-plugin-transform-proto-to-assign                   |        ❌         |
| babel-plugin-transform-react-constant-elements           |        ❌         |
| babel-plugin-transform-react-display-name                |        ✔️         |
| babel-plugin-transform-react-inline-elements             |        ❌         |
| babel-plugin-transform-react-jsx                         |        ✔️         |
| babel-plugin-transform-react-jsx-compat                  |        ❌         |
| babel-plugin-transform-react-jsx-self                    |        ✔️         |
| babel-plugin-transform-react-jsx-source                  |        ✔️         |
| babel-plugin-transform-regenerator                       |        ✔️         |
| babel-plugin-transform-reserved-words                    |        ✔️         |
| babel-plugin-transform-runtime                           |        ✔️         |
| babel-plugin-transform-shorthand-properties              |        ✔️         |
| babel-plugin-transform-spread                            |        ✔️         |
| babel-plugin-transform-sticky-regex                      |        ✔️         |
| babel-plugin-transform-strict-mode                       |        ✔️         |
| babel-plugin-transform-template-literals                 |        ✔️         |
| babel-plugin-transform-typeof-symbol                     |        ✔️         |
| babel-plugin-transform-typescript                        |        ✔️         |
| babel-plugin-transform-unicode-regex                     |        ❌         |
| babel-preset-env                                         |        ✔️         |
| babel-preset-env-standalone                              |        ❌         |
| babel-preset-flow                                        |        ❌         |
| babel-preset-react                                       |        ✔️         |
| babel-preset-stage-0                                     |        ❌         |
| babel-preset-stage-1                                     |        ❌         |
| babel-preset-stage-2                                     |        ❌         |
| babel-preset-stage-3                                     |        ❌         |
| babel-preset-typescript                                  |        ✔️         |
| babel-register                                           | ✔️ (swc-register) |
