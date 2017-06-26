var fs = require('fs');

fs.appendFile('out/msal.js', '\nwindow.Msal = Msal;', function (err) {
  if (err) throw err;
  console.log('Saved!');
});