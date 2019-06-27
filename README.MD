## TypeScript VS Code Quickstart

This is just a quickstart for my VS Code config. Feel free to use.

#### Watch Mode Automatically

Just use `cmd + shift + B` and the compiler will automatically start in watch mode, no need to select or configure anything.

## Usage

#### TypeScript Workspace vs. VS Code

VS Code ships with the latest stable version of TS as of the _latest update_ to VS Code ... this means it isn't really always the latest stable version.

The included `package.json` will install TS locally in your project. To use this latest version first `npm install`. Then select a `.ts` file and press `Cmd+Shift+P` (`Ctrl+Shift+P` in Windows). Search for TypeScript and select the option "Select TypeScript version..." and choose "Use Workspace Version".

#### tsconfig

A basic tscofig is included. Edit to your heart's desire.
TypeScript is already integrated with VS Code, but is installed via `package.json` to support other featuers like `typescript-tslint-plugin` which replaces and improves on functionality originally provided by the `vscode-tslint` extension. Read more about it here: https://github.com/Microsoft/typescript-tslint-plugin.

#### tslint

`tslint` is included with default configuration and managed as a workspace plugin via a `node_module` due to improved linting as noted above.

#### Prettier

Meant to be used with Prettier. Just install the VS Code extension `esbenp.prettier-vscode`. A basic Prettier `.prettierrc.json` configuration file is included.
