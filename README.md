# Commands used to set up an Extension with bundling.
# code is split up into seperate modules & you bundle them into a webpack using a single content.js file.
# Scalable solution for larger projects


### Folder Structure
/test-extension
|-- /src
|   |-- main.js
|   |-- utils.js
|-- /dist
|-- manifest.json
|-- webpack.config.js
|-- package.json

# Step 1: Create manifest.json
# Step 2: Write src/main.js
# Step 3: Write src/utils.js
# Step 4: Create webpack.config.js

# Install Dependencies and Build
Run the following commands in the test-extension folder:

# Initialize the project:
npm init -y

# Install Webpack:
npm install --save-dev webpack webpack-cli

# Build the project:
npm run build or npx webpack
# This will generate the dist/main.js file(the output file).