import wdioEslint from '@wdio/eslint'

export default wdioEslint.config([
    {
        ignores: ['dist']
    }
])
