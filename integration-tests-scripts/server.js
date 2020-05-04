const express = require('express');
const appStaticPathFolder = './dist/main-app';
const appBaseHref = '/';
const port = 4200;
const app = express();

app.use(appBaseHref, express.static(appStaticPathFolder));

app.listen(port);
