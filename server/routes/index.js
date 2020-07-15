const express = require('express');
const app = express();

app.use(require('./login').app);
app.use(require('./register').app);
app.use(require('./usuario').app);
app.use(require('./chat').app);



module.exports = {
    app
};