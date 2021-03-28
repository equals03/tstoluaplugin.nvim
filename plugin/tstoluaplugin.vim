if exists('g:loaded_tstoluaplugin')
    finish
endif
let g:loaded_tstoluaplugin = 'yup'

function! s:tstoluaplugin_complete(arg,line,pos)
    let l:builtin_list = luaeval('vim.tbl_keys(require("tstoluaplugin.builtin"))')
    let l:options_list = luaeval('vim.tbl_keys(require("tstoluaplugin.config").values)')

    let list = [extend(l:builtin_list, l:options_list)]
    if len(list) <= 0
        return
    endif

    let l = split(a:line[:a:pos-1], '\%(\%(\%(^\|[^\\]\)\\\)\@<!\s\)\+', 1)
    let n = len(l) - index(l, 'TsToLuaPlugin') - 2

    if n == 0
        return join(list[0],"\n")
    endif

    if n > 1
        return join(list[1],"\n")
    endif
endfunction

" tstoluaplugin Commands with complete
command! -nargs=* -complete=custom,s:tstoluaplugin_complete TsToLuaPlugin    lua require('tstoluaplugin.command').load_command(<f-args>)
