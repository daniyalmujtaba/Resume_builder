import {Document}  from 'mongoose';




export default interface  IAchievement extends Document {
    title: string,
    summary?:string,
    date? : Date, 

}
