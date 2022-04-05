import { Request, Response, NextFunction } from "express";


enum ImportantSections {
    Skills,
    Education,
} 

const ValidateInput  = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  for (const item in ImportantSections) {
    if (isNaN(Number(item))) {
      console.log(req.body[item], item, req.body);
      if(!req.body.hasOwnProperty.call(req.body, item))
        return res.status(400).json({
          error : `${item} is missing`,
          
        });
      else if(req.body[item].length ===0)
      {
        return res.status(400).json({
          error : `${item} cant be empty`,
          
        });
      }
    }
  }

  next();

}


export default {
  ValidateInput
}