// Written: Roos Lindeboom 30 aug 2022


// --- CSV ---
const fs = require('fs');
 
fs.readFile('/Users/rooslindeboom/Desktop/KEA - projects/System integrations/SI-homework/systemIntegrations_homework/1._File_formats_bonanza/node/Article_files/Article.cvs', 'utf8', function (err, data) {
  console.log("-- cvs --");  
  console.log(data)
});

// --- yaml ---
const yaml = require('js-yaml');

try {
    let fileContents = fs.readFileSync('/Users/rooslindeboom/Desktop/KEA - projects/System integrations/SI-homework/systemIntegrations_homework/1._File_formats_bonanza/node/Article_files/Article.yaml', 'utf8');
    let data = yaml.load(fileContents);

    console.log("-- yaml --");
    console.log(data);
} catch (e) {
    console.log(e);
}