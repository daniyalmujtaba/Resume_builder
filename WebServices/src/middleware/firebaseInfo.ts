import firebaseAdmin from "firebase-admin";
import { Request, Response, NextFunction } from "express";

const extractFirebaseInfo = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (token) {
    firebaseAdmin
      .auth()
      .verifyIdToken(token)
      .then((result) => {
        if (result) res.locals.firebase = result;
        res.locals.fire_token = token;
        next();
      })
      .catch((error) => {
        console.log(error);
        return res.status(401).json({
          error,
          message: "Not authorized",
        });
      });
  } else {
    return res.status(401).json({
      message: "Not authorized",
    });
  }
};

export default extractFirebaseInfo;
