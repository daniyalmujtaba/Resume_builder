import mongoose from "mongoose";
import IResume from "../interfaces/resume";
    
 

const ResumeSchema : mongoose.Schema = new mongoose.Schema({
    Title : {type: String, required:true},

    uid : {type: String, unique:true},
    User: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
    BasicInfo :  {
        Name: {type: String, required:true}, 
        PhoneNumber : {type: String, required:true},
        Email : {type: String, required:true},
        Address : {type: String, required:true},
        Web_url : {type: String, required:false},
        Linkedin_profile : {type: String, required:false}
    },
    Education : [{
      
      Institute : {type : mongoose.Schema.Types.Mixed, unique: false, required: true},
      StartDate : {type : mongoose.Schema.Types.Mixed, unique: false, required: true},
      EndDate : {type : mongoose.Schema.Types.Mixed, unique: false, required: false},
      Present : {type: Boolean, required:true},
      Summary: {type: String, required:false},
      Level : {type: String, required:true},
      Major: {type: String, required:true},
      GPA: {type: String, required:false},
      Location : {type:String, required:true},
  }],
    Hobbies : [{type: String, required:false}],
    Achievements: [{
      Title: {type: String, required:true},
      Summary:{type: String, required:false},
      Date : {type : mongoose.Schema.Types.Mixed, required: false}, 
  }],
    Projects : [{
      Title: {type: String, required:true},
      Summary:{type: String, required:true},
  }],
    Experience : [{
      
      Company : {type: String, required:true},
      StartDate : {type : mongoose.Schema.Types.Mixed, required: true},
      EndDate : {type : mongoose.Schema.Types.Mixed, required: false},
      Present : {type: Boolean, required:true},
      Type: {type:String, required: true},
      Summary: {type: String, required:false},
  }],
    Skills: [{
      Name: {type: String, required:true},
      Level: {type : mongoose.Schema.Types.Mixed, unique: true, required: true},
  }],
    Summary :{
      type : String,required: false,
  },
    Objective : {
      type : String,
      required: false,
  },
});

export default mongoose.model<IResume>('Resume', ResumeSchema);
