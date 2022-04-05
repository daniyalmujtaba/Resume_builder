var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import logging from "../configs/logging";
import Resume from "../models/resume";
import mongoose from "mongoose";
var create = function (req, res, next) {
    logging.info("Attempting to add new  Resume ...");
    var resume = new Resume(__assign({ _id: new mongoose.Types.ObjectId() }, req.body));
    return resume
        .save()
        .then(function (newResume) {
        return res.status(200).json({ resume: newResume });
    })
        .catch(function (error) {
        logging.error(error.message);
        return res.status(500).json({
            message: error.message,
        });
    });
};
var read = function (req, res, next) {
    var _id = req.params.resumeID;
    logging.info("Incoming read for resume with id ".concat(_id));
    Resume.findById(_id)
        .exec()
        .then(function (resume) {
        if (resume) {
            return res.status(200).json({
                resume: resume,
            });
        }
        else {
            return res.status(404).json({
                error: "Resume not found.",
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
    console.log(req);
    Resume.find({}).populate({
        path: 'User',
        match: { '_id': req.params.userID }
    }).exec()
        .then(function (resumes) {
        return res.status(200).json({
            count: resumes.length,
            resumes: resumes,
        });
    })
        .catch(function (error) {
        logging.error(error.message);
        return res.status(500).json({
            message: error.message,
        });
    });
};
var query = function (req, res, next) {
    logging.info('Query route called');
    Resume.find(req.body)
        .populate('User')
        .exec()
        .then(function (resumes) {
        return res.status(200).json({
            count: resumes.length,
            resumes: resumes
        });
    })
        .catch(function (error) {
        logging.error(error.message);
        return res.status(500).json({
            message: error.message
        });
    });
};
var update = function (req, res, next) {
    logging.info('Update route called');
    var _id = req.params.resumeID;
    Resume.findById(_id)
        .exec()
        .then(function (resume) {
        if (resume) {
            resume.set(req.body);
            resume.save()
                .then(function (resume) {
                logging.info("Resume with id ".concat(_id, " updated"));
                return res.status(200).json({
                    resume: resume
                });
            })
                .catch(function (error) {
                logging.error(error.message);
                return res.status(500).json({
                    message: error.message
                });
            });
        }
        else {
            return res.status(400).json({
                message: 'NOT FOUND'
            });
        }
    })
        .catch(function (error) {
        logging.error(error.message);
        return res.status(500).json({
            message: error.message
        });
    });
};
var deleteResume = function (req, res, next) {
    logging.warn('Delete route called');
    var _id = req.params.resumeID;
    Resume.findByIdAndDelete(_id)
        .exec()
        .then(function () {
        return res.status(201).json({
            message: 'Resume deleted'
        });
    })
        .catch(function (error) {
        logging.error(error.message);
        return res.status(500).json({
            message: error.message
        });
    });
};
export default {
    update: update,
    deleteResume: deleteResume,
    query: query,
    create: create,
    read: read,
    readAll: readAll,
};
