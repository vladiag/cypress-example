const fs = require('fs');
const appStaticPathFolder = './dist/main-app';

fs.copyFileSync(appStaticPathFolder + '/index.modern.html', appStaticPathFolder + '/index.html');
