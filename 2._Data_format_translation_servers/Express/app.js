const express = require('express')
const fs = require('fs');
const yaml = require('js-yaml');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Express: data format translation servers')
});

app.get('/cvs', (req, res) => {
  try {
    fs.readFile('/Users/rooslindeboom/Desktop/KEA - projects/System integrations/SI-homework/systemIntegrations_homework/1._File_formats_bonanza/node/Article_files/Article.cvs', 'utf8', function (err, data) {
      console.log("-- cvs --");  
      res.send(data)
    });
  } catch (e) {
    console.log(e);
  } 
});

app.get('/yaml', (req, res) => {
  try {
      let fileContents = fs.readFileSync('/Users/rooslindeboom/Desktop/KEA - projects/System integrations/SI-homework/systemIntegrations_homework/1._File_formats_bonanza/node/Article_files/Article.yaml', 'utf8');
      let data = yaml.load(fileContents);
  
      console.log("-- yaml --");
      res.send(data);
  } catch (e) {
      console.log(e);
  }
});  
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});