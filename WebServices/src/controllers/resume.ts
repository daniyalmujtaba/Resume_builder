import { NextFunction, Request, Response } from "express";
import logging from "../configs/logging";
import Resume from "../models/resume";
import mongoose from "mongoose";



const create = (req: Request, res: Response, next: NextFunction) => {
  logging.info("Attempting to add new  Resume ...");


  const resume = new Resume(
    { _id: new mongoose.Types.ObjectId(), ...req.body}
  );

  return resume
    .save()
    .then((newResume) => {

      return res.status(200).json({ resume : newResume });
    })
    .catch((error) => {
      logging.error(error.message);

      return res.status(500).json({
        message: error.message,
      });
    });
};


const read = (req: Request, res: Response, next: NextFunction) => {
  const _id = req.params.resumeID;
  logging.info(`Incoming read for resume with id ${_id}`);

  Resume.findById(_id)
    .exec()
    .then((resume) => {
      if (resume) {
        return res.status(200).json({
          resume: resume,
        });
      } else {
        return res.status(404).json({
          error: "Resume not found.",
        });
      }
    })
    .catch((error) => {
      logging.error(error.message);

      return res.status(500).json({
        error: error.message,
      });
    });
};

const readAll = (req: Request, res: Response, next: NextFunction) => {
  logging.info("Readall route called");
  console.log(req);
    Resume.find({}).populate(
    {
      path: 'User',
      match: {'_id': req.params.userID }
    }
  ).exec()
    .then((resumes) => {
      return res.status(200).json({
        count: resumes.length,
        resumes: resumes,
      });
    })
    .catch((error) => {
      logging.error(error.message);

      return res.status(500).json({
        message: error.message,
      });
    });
};

const query = (req: Request, res: Response, next: NextFunction) => {
  logging.info('Query route called');

  Resume.find(req.body)
      .populate('User')
      .exec()
      .then((resumes) => {
          return res.status(200).json({
              count: resumes.length,
              resumes: resumes
          });
      })
      .catch((error) => {
          logging.error(error.message);

          return res.status(500).json({
              message: error.message
          });
      });
};

const update = (req: Request, res: Response, next: NextFunction) => {
  logging.info('Update route called');

  const _id = req.params.resumeID;

  Resume.findById(_id)
      .exec()
      .then((resume) => {
          if (resume) {
              resume.set(req.body);
              resume.save()
                  .then((resume) => {
                      logging.info(`Resume with id ${_id} updated`);

                      return res.status(200).json({
                          resume: resume
                      });
                  })
                  .catch((error) => {
                      logging.error(error.message);

                      return res.status(500).json({
                          message: error.message
                      });
                  });
          } else {
              return res.status(400).json({
                  message: 'NOT FOUND'
              });
          }
      })
      .catch((error) => {
          logging.error(error.message);

          return res.status(500).json({
              message: error.message
          });
      });
};

const deleteResume = (req: Request, res: Response, next: NextFunction) => {
  logging.warn('Delete route called');

  const _id = req.params.resumeID;

  Resume.findByIdAndDelete(_id)
      .exec()
      .then(() => {
          return res.status(201).json({
              message: 'Resume deleted'
          });
      })
      .catch((error) => {
          logging.error(error.message);

          return res.status(500).json({
              message: error.message
          });
      });
};



export default {
  update,
  deleteResume,
  query,
  create,
  read,
  readAll,
};
