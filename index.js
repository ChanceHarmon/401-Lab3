
'use strict'

const faker = require('faker');

const FileSystem = require('./lib/file-system');

const myFileSystem = new FileSystem();


myFileSystem.readFilePromises(`${__dirname}/data/person.json`)
  .then(fileContent => {
    let originalContent = JSON.parse(fileContent.toString());
    console.log(originalContent);
    originalContent.lastName = faker.name.lastName();
    myFileSystem.writeFilePromises(`${__dirname}/data/person.json`, JSON.stringify(originalContent));
  })
  .catch(error => console.log('There is an error in myFileSystem.readFilePromises', error));

