import fs from 'fs/promises';
// const fs = require('fs/promises');
// const fs = require('fs');
const readFileData = async () => {

    // Reads file content as UTF-8 string
    const data = await fs.readFile('data.txt', 'utf8');
    console.log(data);
};

// readFileData();
const writeFileData = async () => {
  await fs.writeFile('data.txt', 'Hii', 'utf-8');
  console.log('File written successfully');
};

writeFileData();