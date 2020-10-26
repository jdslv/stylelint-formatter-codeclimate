
# stylelint-formatter-codeclimate

> A CodeClimate compatible formatter for [Stylelint](https://stylelint.io/)

[![GitLab](https://img.shields.io/static/v1?message=GitLab&logo=gitlab&color=grey&label=)](https://gitlab.com/jdslv/stylelint-formatter-codeclimate)
[![Latest stable version](https://img.shields.io/npm/v/stylelint-formatter-codeclimate)](https://www.npmjs.com/package/stylelint-formatter-codeclimate)
[![Build status](https://img.shields.io/gitlab/pipeline/jdslv/stylelint-formatter-codeclimate/main)](https://gitlab.com/jdslv/stylelint-formatter-codeclimate/-/pipelines)
[![Coverage status](https://img.shields.io/codecov/c/gitlab/jdslv/stylelint-formatter-codeclimate)](https://codecov.io/gl/jdslv/stylelint-formatter-codeclimate/)
[![Minimal NodeJS version](https://img.shields.io/node/v/stylelint-formatter-codeclimate)](https://gitlab.com/jdslv/stylelint-formatter-codeclimate)
[![License](https://img.shields.io/npm/l/stylelint-formatter-codeclimate)](https://gitlab.com/jdslv/stylelint-formatter-codeclimate/-/blob/main/LICENSE)


## Install

Using [npm](https://www.npmjs.com/get-npm):

```bash
npm install --save-dev stylelint-formatter-codeclimate
```

Using [yarn](https://yarnpkg.com/):

```bash
yarn add --dev stylelint-formatter-codeclimate
```

Using [pnpm](https://pnpm.js.org):

```bash
pnpm install --dev stylelint-formatter-codeclimate
```

## Usage

### Stylelint CLI

```bash
npx stylelint "*.css" --custom-formatter=node_modules/stylelint-formatter-codeclimate
```

### GitLab CI

```yaml
lint:
  script:
    - npx stylelint "*.css" --custom-formatter=node_modules/stylelint-formatter-codeclimate --output-file=gl-code-quality-report.json

  artifacts:
    reports:
      codeclimate: gl-code-quality-report.json
```
