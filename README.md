# tstoluaplugin.nvim

A quick proof of concept nvim Lua plugin transpiled from TypeScript.

## What is tstoluaplugin?

`tstoluaplugin.nvim` is nothing more than a proof of concept. It's the scaffolding of the transpiling toolchain thats just barely enough to function as the bare minimum.

The transpiling is facilitated by way of the [TypeScriptToLua](https://typescripttolua.github.io/) project.

Some notable(?) development features I wanted to support:

-   npm build
-   ts declaration files, both
    -   via npm, and
    -   custom
-   external lua references via
    -   [plenary.nvim](https://github.com/nvim-lua/plenary.nvim)
-   great intellisense
-   eslint
-   prettier

## What does this give you?

A very simple plugin with some command completion. The completion and structure is _heavily inspired_ (as in stolen from) [@tjdevries](https://github.com/tjdevries)'s [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim).

I've butchered what he did.

## Installation

Clone the repo locally (eg. `~/development/tstoluaplugin.vim`).

Using [packer.nvim](https://github.com/wbthomason/packer.nvim)

```lua
use {
  '~/development/tstoluaplugin.vim',
  requires = {{'nvim-lua/plenary.nvim'}}
}
```

Using [vim-plug](https://github.com/junegunn/vim-plug)

```viml
Plug 'nvim-lua/plenary.nvim'
Plug '~/development/tstoluaplugin.vim'
```

Fire up `nvim`.

The transpiled `lua` is in the repo so that the plugin can be run right after cloning, without having to "build" first.

## Usage

Try the command `:TsToLuaPlugin dump 1 2 3 4`
to see if `tstoluaplugin` is installed correctly.

You should see: `{ 1, 2, 3, 4 }` printed. So much wow.

To see the other commands available just use your standard completion and you should see a few more options pop-up.

It should have a few "builtin" commands and two settings that will be printed to the console.

Commands available:  
`shell`
this will invoke a shell application and print its stdout. Additionally, it will also print the cmd and args used.  
```vimL
:TsToLuaPlugin shell ls -al
```

`dump`  
this will print out whatever arguments are supplied.  
```vimL
:TsToLuaPlugin dump 1 2 three four
```

`not_implemented`  
this will just use the `nivm` api to print a little error message saying "not implemented".  
```vimL
:TsToLuaPlugin not_implemented
```

`config_value_(one|two)`  
this will print the value of the config entry. You can override them using the `.setup()` method (below).  
```vimL
:TsToLuaPlugin config_value_one
```

## Configuration

```lua
require('tstoluaplugin').setup{
  defaults = {
      config_value_two = 42
  }
}
```

You can verify this has been applied by printing the value using the method outlined above.

## Modifying the plugin

```bash
cd ~/development/tstoluaplugin.nvim
npm install
```

Create new/modify any of the files in `./typescript`.
Use `npm run` to run a build step.

```bash
npm run build
```

... will transpile the `.ts` to the `./lua` directory.

```bash
npm run dev
```

... will do the same as above but watching for changes.

```bash
npm run clean
```

... will `rm -rf` the `./lua` directory if you want to be sure of a fresh start.

## Why did you bother?

Because it seemed like fun.

## Something to keep in mind

I am neither an expert in `TypeScript` nor `Lua`. I just enjoy tinkering and exploring the patterns/implementations that these languages make available. I'm aware _everything_ in this repository could be done better.

It seems to work though, so thats a plus.

## Contributing

Even though I'm not sure why... Sure.
Just open a pull request.

Or don't.

Your call.
