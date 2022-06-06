# @swc/cli

## 使用

执行以下命令下载预构建的二进制文件：

```plaintext
npm i -D @swc/cli @swc/core
```

然后你可以转换你的文件：

```sh
# 转换一个文件并且输出到 stdout
npx swc ./file.js

# 转换一个文件并且输出到 `output.js`
npx swc ./file.js -o output.js

# 转换并将结果写入到 /output 文件夹
npx swc ./my-dir -d output
```

## 配置项

### --filename (-f)

要从 stdin 中读取文件时使用的文件名。这将会被用于 source maps 和错误日志。

```sh
npx swc -f input.js
```

### --config-file

要使用的 `.swcrc` 文件路径。

```sh
npx swc input.js --config-file .swcrc
```

### --env-name

在加载配置以及插件时使用的 'env' 名称。默认取 `SWC_ENV` 的值，没有的话取 `NODE_ENV`，再没有取 `development`。

```sh
npx swc input.js --env-name='test'
```

### --no-swcrc

是否寻找 `.swcrc` 文件。

```sh
npx swc input.js --no-swcrc
```

### --ignore

**不进行** 编译的 glob 路径。

```sh
npx swc src --ignore **/*.test.js
```

### `--only`

需要编译的 glob 路径

示例：

```sh
npx swc src --only **/*.js
```

### --watch (-w)

文件变化时自动重新编译，安装 `chokidar`：

```sh
npm i -D chokidar
```

然后添加 `-w` 标识：

```sh
npx swc input.js -w
```

### --quiet (-q)

消除编译输出。

```sh
npx swc input.js -q
```

### --source-maps (-s)

可选值：`true|false|inline|both`

```sh
npx swc input.js -s
```

### --source-map-target

为 source map 定义 `file`。

```sh
npx swc input.js -s --source-map-target input.map.js
```

### --source-file-name

在返回的 source map 中设置 `sources[0]`

### --source-root

所有资源的根路径

### --out-file (-o)

将所有输入文件编译到一个文件中。

```sh
npx swc input.js -o output.js
```

### --out-dir (-d)

编译一个输入文件夹到一个输出文件夹。

```sh
npx swc src -d dist
```

### --copy-files (-D)

当编译一个文件夹时，复制非可编译的文件。

```sh
npx swc src --copy-files
```

### --include-dotfiles

当编译以及复制非可编译的文件时包含点文件（dotfiles）

```sh
npx swc src --include-dotfiles
```

### --config (-C)

从 `.swcrc` 文件中复写一个配置。

```sh
npx swc src -C module.type=amd -C module.moduleId=hello
```

### --sync

同步调用 swc，Useful for debugging.

```sh
npx swc src --sync
```

### --log-watch-compilation

当文件成功编译时打印一条消息。

```sh
npx swc input.js --log-watch-compilation
```

### --extensions

使用指定的拓展。
