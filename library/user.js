var models = require('./../models');

const createAccount = async (userAccount) => {
    try {
        let account = await models.userModel.create(userAccount);
        return {
            err: null,
            account: account
        }
    } catch (err) {
        return {
            err: err,
            account: null
        }
    }
}

const authenticateUser = async (user) => {
    // console.log(user);
    try {
        let userAccount = await models.userModel.findOne({
            username: user.username
        });
        if(userAccount) {
            return {
                user: userAccount,
                err: null
            };
        }
        else {
            return {
                user: null,
                err: 'Account doesn\'t exist !!!'
            };
        }
    } catch (err) {
        return {
            user: null,
            err: err
        };
    }
}

module.exports = {
    createAccount,
    authenticateUser
};