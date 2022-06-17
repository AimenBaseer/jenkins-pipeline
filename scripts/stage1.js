const fs = require('fs')
const fsPromise = require('fs/promises')

console.log('Download files from S3')

const downloadFiles = async () => {
  try {
    const folderExists = fs.existsSync('input')
    if (!folderExists) {
      await fsPromise.mkdir('input')
    }
    await fsPromise.writeFile('input/content.txt', 'Hello content!')
    console.log('Downloaded original data!')
  } catch (err) {
    throw err
  }
}

downloadFiles()