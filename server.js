var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');

var api = require('./apis');
var middlewares = require('./config/middleware');

var app = express();
var port = process.env.PORT || 8080;
var mongodbURI = process.env.DB_URI || 'mongodb://localhost/ShadowBlog';

app.listen(port, () => {
    console.log(`Server listening in port ${port}`);
});

mongoose.connect(mongodbURI, { useCreateIndex: true, useNewUrlParser: true });

middlewares(app);


app.use(cors());

app.use('/', api);

if (process.env.NODE_ENV === 'production') {
    app.get('*', (req,res) => {
        res.sendFile('client/build');
    });
}
