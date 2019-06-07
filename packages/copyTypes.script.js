const fs = require('fs')
const path = require('path')

const typesPath = path.resolve(__dirname, '__generated_types')
const directories = fs.readdirSync(path.resolve(__dirname, '__generated_types'))

directories.forEach(dir => {
  const files = fs.readdirSync(path.resolve(typesPath, dir))
  try {
    fs.mkdirSync(path.resolve(__dirname, dir, 'dist'))
  } catch (e) {
    // console.log(e)
  }
  files.forEach(file => {
    fs.copyFileSync(path.resolve(typesPath, dir, file), path.resolve(__dirname, dir, 'dist', file))
  })
})