
# stylelint-formatter-codeclimate

> A CodeClimate compatible formatter for [Stylelint](https://stylelint.io/)

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
