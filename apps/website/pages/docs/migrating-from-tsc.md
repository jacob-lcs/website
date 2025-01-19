# 从 tsc 迁移

如果你正在从 TypeScript 编译器 (tsc) 迁移，有几个需要注意的地方。

## TypeScript 版本

SWC 支持最新的稳定 TypeScript。

## isolatedModules: true

SWC 逐个文件处理，因此任何依赖于理解完整类型系统的代码转换将无法工作。

如果你遇到这些限制，某些 TypeScript 功能，如 const 枚举和命名空间，可能会导致运行时问题。

在这种情况下，使用 TypeScript 的 [`isolatedModules`][isolatedmodules] 标志可以帮助你发现任何可能不被 SWC 正确解释的代码。

更多详情请参阅 [相关问题](https://github.com/swc-project/swc/issues/7101#issuecomment-1480610668)。

[isolatedmodules]: https://www.typescriptlang.org/tsconfig#isolatedModules

## importsNotUsedAsValues: "error"

由于上述原因，SWC 无法完全区分导入的绑定是 `value` 还是 `type`。

将 [`importsNotUsedAsValues`][importsnotusedasvalues] 选项设置为 `error` 将确保 TypeScript 在类型检查期间正确地将所有类型导入标记为 `type`，从而在 SWC 中准确地删除它们。

[importsnotusedasvalues]: https://www.typescriptlang.org/tsconfig#importsNotUsedAsValues

## esModuleInterop: true

TypeScript 的导入互操作性偏离了 ES6 模块规范。

另一方面，SWC 采用类似 Babel 的方法（有时更严格）。

启用此 [esModuleInterop][esmoduleinterop] 选项可确保 tsc 的行为与 SWC 一致。

[esmoduleinterop]: https://www.typescriptlang.org/tsconfig#esModuleInterop

## verbatimModuleSyntax: true

这是 TypeScript 5.0 中引入的一个新选项，用于替换 `isolatedModules`, `preserveValueImports` 和 `importsNotUsedAsValues`。
请参阅 [发布说明][verbatimmodulesyntax] 了解更多详情。

[verbatimmodulesyntax]: https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-beta/#verbatimmodulesyntax

## useDefineForClassFields

这个问题涉及 `[[Define]]` 和 `[[Set]]` 的语义。

谁不需要关心这个问题？

- 那些从不使用类的人。
- 那些使用类但不使用继承的人。

谁需要特别注意这个问题？

- 使用装饰器的人。

如果该值已在你的 `tsconfig.json` 中设置，则可以在 SWC 的配置中使用相同的值。

如果未设置并且你遇到问题，则需要补充此设置。

请注意，此选项的默认值将取决于 `tsconfig.json` 的 `target`。

请参阅 [useDefineForClassFields][usedefineforclassfields] 选项。

> true if target is ES2022 or higher, including ESNext, false otherwise.

[usedefineforclassfields]: https://www.typescriptlang.org/tsconfig#useDefineForClassFields

## 已知问题

- [TypeScript#16166](https://github.com/microsoft/TypeScript/issues/16166)
  ES6 导入不会被 tsc 提升。如果你依赖错误的 tsc 实现，在迁移到 swc 时可能会遇到问题，因为 swc 更严格地保留了 ES 模块语义。

## 注意事项

SWC 仅转译代码，不执行类型检查。因此，建议继续使用 tsc 检测任何类型错误。
