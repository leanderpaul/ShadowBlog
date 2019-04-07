var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var path = require('path');

var api = require('./apis');
var middlewares = require('./config/middleware');

var app = express();
var port = process.env.PORT || 8080;
var mongodbURI = process.env.DB_URI || 'mongodb://localhost/ShadowBlog';
var env = process.env.NODE_ENV || 'production';

app.listen(port, () => {
    console.log(`Server listening in port ${port} and ${env} environment`);
});

mongoose.connect(mongodbURI, { useCreateIndex: true, useNewUrlParser: true });

middlewares(app);


app.use(cors());

app.use('/', api);

if (env === 'production') {
    app.use(express.static('build'));
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname + '/build/index.html'));
    });
}
