var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');

var api = require('./apis');
var middlewares = require('./config/middleware');
var lib = require('./library');

var app = express();
var port = process.env.PORT || 8080;
var mongodbURI = process.env.DB_URI || 'mongodb://localhost/ShadowBlog';

app.listen(port, () => {
    console.log(`Server listening in port ${port}`);
});

mongoose.connect(mongodbURI);

middlewares(app);


app.use(cors());

// app.post('/', async (req, res) => {
//     console.log(req.sessionID);
//     let sessionId = mongoose.Types.ObjectId(req.body.sessionId);
//     console.log(`session id: ${sessionId}`);
//     lib.authenticate.deserializeUser(sessionId, (err, user) => {
//         if (err) {
//             console.log(err);
//             return res.json({
//                 success: false,
//                 user: null
//             });
//         }
//         console.log(user);
//         res.json({
//             success: true,
//             user
//         });
//     });
// });

app.use('/', api);
