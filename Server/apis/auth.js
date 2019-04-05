var router = require('express').Router();
var lib = require('./../library');

router.get('/logout', (req,res) => {
    req.logout();
});

router.post('/login', async (req, res) => {
    try {
        let user = await lib.userLibrary.authenticateUser(req.body);
        // console.log(user)
        if (user.err) {
            throw user.err;
        }
        else {
            req.login(user.user,(err) => {
                if(err) 
                    throw new Error('Cannot login user !!!');
                else { 

                    return res.json({
                        success: true,
                        msg: 'Logged in successfully',
                        token: user.user._id
                    });
                }
            });
        }
    } catch (err) {
        return res.json({
            success: false,
            msg: err
        });
    }
});

router.post('/register', async (req, res) => {
    let user = req.body;
    // console.log(user);
    try {
        let result = await lib.userLibrary.createAccount(user);
        if (result.account)
            return res.json({
                success: true,
                msg: 'Successfully Registered !!!'
            });
        else
            return res.json({
                success: false,
                msg: 'Account already exists !!!'
            });
    } catch (err) {
        return res.json({
            success: false,
            msg: 'Internal server error'
        });
    }
});

module.exports = router;