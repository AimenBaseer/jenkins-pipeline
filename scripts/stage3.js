const fsPromise = require('fs/promises')

console.log('Upload back to S3')

const readUpdatedFiles = async () => {
  try {
    const data = await fsPromise.readFile('output/content.txt', { encoding: 'utf8' });
    console.log(data);
    fsPromise.rm('input', { recursive: true })
    fsPromise.rm('output', { recursive: true })
  } catch (err) {
    throw err;
  }
}

readUpdatedFiles()