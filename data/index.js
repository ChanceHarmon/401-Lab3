
const EditFile = require('../edit-file');


const myEditFile = new EditFile();

myEditFile.readFilePromises(`${__dirname}/person.json`)
  .then(fileString => {
    console.log(fileString.toString());
    return 'conan is great';
  })




  .catch(error => console.error(error));

