import {Document}  from 'mongoose';

export default interface  IExperience extends Document {
    Company : string,
    startDate : Date |string ,
    endDate? : Date | string | null,
    present? : boolean,
    Summary?: string | null,
    
}
