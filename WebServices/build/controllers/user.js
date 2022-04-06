import logging from "../configs/logging";
import User from "../models/user";
import mongoose from "mongoose";
var validate = function (req, res, next) {
    logging.info("Token validated, ensuring user.");
    var firebase = res.locals.firebase;
    return User.findOne({ uid: firebase.uid })
        .then(function (user) {
        if (user) {
            return res.status(200).json({ user: user });
        }
        else {
            return res.status(401).json({
                message: "Token(s) invalid, user not found",
            });
        }
    })
        .catch(function (error) {
        return res.status(500).json({
            message: error.message,
            error: error,
        });
    });
};
var create = function (req, res, next) {
    logging.info("Attempting to register user ...");
    var _a = req.body, uid = _a.uid, name = _a.name;
    var fire_token = res.locals.fire_token;
    var user = new User({
        _id: new mongoose.Types.ObjectId(),
        uid: uid,
        name: name,
    });
    return user
        .save()
        .then(function (newUser) {
        logging.info("New user ".concat(uid, " created"));
        return res.status(200).json({ user: newUser, fire_token: fire_token });
    })
        .catch(function (error) {
        logging.error(error.message);
        return res.status(500).json({
            message: error.message,
        });
    });
};
var login = function (req, res, next) {
    logging.info("Verifying user");
    var uid = req.body.uid;
    var fire_token = res.locals.fire_token;
    return User.findOne({ uid: uid })
        .then(function (user) {
        if (user) {
            logging.info("User ".concat(uid, " found, attempting to sign token and return user ..."));
            return res.status(200).json({ user: user, fire_token: fire_token });
        }
        else {
            logging.warn("User ".concat(uid, " not in the DB, attempting to register ..."));
            return create(req, res, next);
        }
    })
        .catch(function (error) {
        logging.error(error.message);
        return res.status(500).json({
            message: error.message,
        });
    });
};
var read = function (req, res, next) {
    var _id = req.params.userID;
    logging.info("Incoming read for user with id ".concat(_id));
    User.findById(_id)
        .exec()
        .then(function (user) {
        if (user) {
            return res.status(200).json({
                user: user,
            });
        }
        else {
            return res.status(404).json({
                error: "User not found.",
            });
        }
    })
        .catch(function (error) {
        logging.error(error.message);
        return res.status(500).json({
            error: error.message,
        });
    });
};
var readAll = function (req, res, next) {
    logging.info("Readall route called");
    User.find()
        .exec()
        .then(function (users) {
        return res.status(200).json({
            count: users.length,
            users: users,
        });
    })
        .catch(function (error) {
        logging.error(error.message);
        return res.status(500).json({
            message: error.message,
        });
    });
};
export default {
    validate: validate,
    create: create,
    login: login,
    read: read,
    readAll: readAll,
};
