const Users = require("../models/users.model");

exports.getAllUser = async function(req, res, next){
    try{
        await Users.find()
            .then(allUsers => {
                res.status(200);
                res.send(allUsers);
            })
    }catch (e) {
        console.log("Error with fetching all users")
        console.log(e);
        res.status(400);
        res.send("Bad request with fetching all users")
    }
};

exports.verifyUser = async function(req, res, next){
    try{
        // fetch user and test password verification
        Users.findOne({ username: req.body.username }, function(err, user) {
            if (err) throw err;
            // test a matching password
            user.comparePassword(req.body.password, function(err, isMatch) {
                if (err) throw err;
                if (isMatch === true){
                    console.log("Password Matched")
                    res.status(200);
                    res.send("User Authenticated");
                }else{
                    res.status(401);
                    res.send("Bad Username or Password")
                }
            });
        });
    }catch(e){
        console.log("Error with fetching user information")
        console.log(e)
        res.status(400)
        res.send("Bad request with fetching auth")
    }
};

exports.createUser = async function(req, res, next){
    try{
        let newuser = new Users({
            username: req.body.username,
            password: req.body.password,
            name: req.body.name
        });
        newuser.save(function(err) {
            if (err) throw err;
        });
        res.status(200);
        res.send("New user created");
    }catch (e) {
        console.log("Error with creating new user")
        console.log(e);
        req.status(400);
        req.send("Could not create new user")
    }
};