# \<make-them>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.
As of now its contains following components:

* column-them : puts child div in a column
* row-them: puts child div in row.
* center-them: Center a single child.
* stack-them: put all child divs in a stack

## Installation
```bash
npm i make-them
```

## Usage
```html
<script type="module">
  import 'make-them/make-them.js';
</script>

<make-them></make-them>
```

## Linting with ESLint, Prettier, and Types
To scan the project for linting errors, run
```bash
npm run lint
```

You can lint with ESLint and Prettier individually as well
```bash
npm run lint:eslint
```
```bash
npm run lint:prettier
```

To automatically fix many linting errors, run
```bash
npm run format
```

You can format using ESLint and Prettier individually as well
```bash
npm run format:eslint
```
```bash
npm run format:prettier
```

## Demoing with Storybook
To run a local instance of Storybook for your component, run
```bash
npm run storybook
```

To build a production version of Storybook, run
```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `es-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`
