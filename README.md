# Setting Up an Extension with Bundling

A scalable solution for larger projects where code is split into separate modules and bundled using Webpack into a single `content.js` file.

## Folder Structure

```
/test-extension
|-- /src
|   |-- main.js
|   |-- utils.js
|-- /dist
|-- manifest.json
|-- webpack.config.js
|-- package.json
```

## Steps

### Step 1: Create `manifest.json`

### Step 2: Write `src/main.js`

### Step 3: Write `src/utils.js`

### Step 4: Create `webpack.config.js`

## Install Dependencies and Build

Run the following commands in the `test-extension` folder:

### Initialize the project:

```sh
npm init -y
```

### Install Webpack:

```sh
npm install --save-dev webpack webpack-cli
```

### Build the project:

```sh
npm run build
```
or
```sh
npx webpack
```

This will generate the `dist/main.js` file (the output file).