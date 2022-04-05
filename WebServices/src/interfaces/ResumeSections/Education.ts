import {Document}  from 'mongoose';

export default interface  IEducation extends Document {
    Institute : string,
    startDate : Date | string,
    endDate? : Date |string | null,
    present? : boolean,
    Summary?: string | null,
    Level : string,
    Major: string,
    GPA?: string | null,

}
