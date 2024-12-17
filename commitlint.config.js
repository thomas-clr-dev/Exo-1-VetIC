module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert', 'ci', 'build', 'perf', 'wip', 'release']],
        'subject-case': [2, 'always', 'sentence-case'],
        'header-max-length': [2, 'always', 150],
    },
};