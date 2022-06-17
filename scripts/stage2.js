const fs = require('fs')
const fsPromise = require('fs/promises')

console.log('Run unity script')

const createUpdatedFiles = async () => {
  try {
    const data = await fsPromise.readFile('input/content.txt', { encoding: 'utf8' });
    const folderExists = fs.existsSync('output')
    if (!folderExists) {
      await fsPromise.mkdir('output')
    }
    await fsPromise.writeFile('output/content.txt', `${data} Appended data`)
    console.log('Created new data!');
  } catch (err) {
    throw err;
  }
}

createUpdatedFiles()