import { compile } from '@mdx-js/mdx'
import type { CompileOptions } from '@mdx-js/mdx'

export async function compileMDX(source: string, options?: CompileOptions) {
    const compiled = await compile(source, {
      outputFormat: 'function-body',
      ...options
    })
    const runtimeImport = `const { jsx: _jsx, jsxs: _jsxs, Fragment } = require("react/jsx-runtime");\n`
    // Wrap the code in an IIFE to avoid leaking the runtime declarations globally.
    const wrapped = `(function(){\n${runtimeImport}${String(compiled)}\nreturn MDXContent;\n})()`
    return wrapped
  }