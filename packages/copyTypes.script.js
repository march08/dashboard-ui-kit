const fs = require('fs');
const path = require('path');

const typesPath = path.resolve(__dirname, '__generated_types');
const directories = fs.readdirSync(
  path.resolve(__dirname, '__generated_types')
);

directories.forEach(dir => {
  const files = fs.readdirSync(path.resolve(typesPath, dir));
  try {
    fs.mkdirSync(path.resolve(__dirname, dir, 'dist'));
  } catch (e) {
    // console.log(e)
  }
  files.forEach(file => {
    const pathSource = path.resolve(typesPath, dir, file);
    const content = fs.readFileSync(pathSource);
    const contentString = content.toString();

    // frikin fix for ts declaration gen
    const replaced = contentString.replace(
      new RegExp('"../core"', 'g'),
      '"@duik/core"'
    );
    fs.writeFileSync(path.resolve(__dirname, dir, 'dist', file), replaced);
  });
});
