# Migrating from tsc

If you are Migrating from TypeScript Compiler(tsc), there are a few things to keep in mind.

## isolatedModules: true

SWC works on file-by-file, so any code transforms that depend on understanding the full type system will not work.

If you encounter these limitations, certain TypeScript features such as const enums and namespaces may cause runtime problems.

In this case, using the [`isolatedModules`][isolatedmodules] flag in TypeScript can help to warn you of any code that may not be correctly interpreted by SWC.

See [a comment on the related issue](https://github.com/swc-project/swc/issues/7101#issuecomment-1480610668) for more details.

[isolatedmodules]: https://www.typescriptlang.org/tsconfig#isolatedModules

## importsNotUsedAsValues: "error"

Due to the aforementioned reasons, SWC is unable to completely discern whether the imported binding is a `value` or a `type`.

Setting this [`importsNotUsedAsValues`][importsnotusedasvalues] option to `error` will ensure that TypeScript properly marks all type imports during type checking as `type`, thus removing them accurately in SWC.

[importsnotusedasvalues]: https://www.typescriptlang.org/tsconfig#importsNotUsedAsValues

## esModuleInterop: true

The TypeScript's import interoperability deviates from the ES6 modules specification.

SWC, on the other hand, adopts a similar approach to Babel (which can sometimes be more stringent).

Enabling this [esModuleInterop][esmoduleinterop] option ensures that tsc's behavior aligns with that of SWC.

[esmoduleinterop]: https://www.typescriptlang.org/tsconfig#esModuleInterop

## verbatimModuleSyntax: true

This is a new option introduced in TypeScript 5.0 to replace `isolatedModules`, `preserveValueImports` and `importsNotUsedAsValues`.
Please check the [release note][verbatimmodulesyntax] for further details.

[verbatimmodulesyntax]: https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-beta/#verbatimmodulesyntax

## useDefineForClassFields

This issue involves the semantics of `[[Define]]` and `[[Set]]`.

Who does not need to take care of it?

- Those who never use classes.
- Those who use classes but never use inheritance.

Who needs to pay special attention to this matter?

- Decorator users.

If the value has already been set in your `tsconfig.json`, then the same value can be used in the configuration of swc.

If it has not been set and you encounter a problem, then it is necessary for you to supplement this setting.

It should be noted that the default value of this option will change depending on the `target` of your `tsconfig.json`.

Please check the [useDefineForClassFields][usedefineforclassfields] option.

> true if target is ES2022 or higher, including ESNext, false otherwise.

[usedefineforclassfields]: https://www.typescriptlang.org/tsconfig#useDefineForClassFields

## Known issues

- [TypeScript#16166](https://github.com/microsoft/TypeScript/issues/16166)
  ES6 imports are not hoisted by tsc. If you rely on erroneous tsc implementation, you may encounter issues when migrating to swc, as swc more rigorously preserves ES module semantics.

## Notes

SWC only transpiles the code and doesn't perform type checking.
Therefore, it's recommended that you continue to use tsc for detecting any type errors.
