'use strict'
console.log('on');
const fs = require('fs');
const fsExtra = require('fs-extra');

class EditFile {
  readFile(filename, externalCallBack) {
    fs.readFile(filename, (error, fileContents) => {
      if (error) {
        console.log('here');
        externalCallBack(error);
      } else {
        externalCallBack(undefined, fileContents.toString());
        console.log(fileContents.toString());
      }
    });
  }
  editFile(filename) {
    edit(filename, (error, fileContents) => {
      if (error) {
        console.log('error');
      } else {
        JSON.parse(fileContents)
      }

    })

  }



  writeFile(filename, data) {
    fs.writeFile(filename, data, (error) => {
      if (error) console.log(error)

    })
  }

  readFilePromises(filename) {
    return fsExtra.readFile(filename);
  }

}
console.log('skip');

module.exports = EditFile;