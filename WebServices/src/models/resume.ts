import mongoose from "mongoose";
import IResume from "../interfaces/resume";
    
 

const ResumeSchema : mongoose.Schema = new mongoose.Schema({
    
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
      startDate : {type : mongoose.Schema.Types.Mixed, unique: false, required: true},
      endDate : {type : mongoose.Schema.Types.Mixed, unique: false, required: false},
      present : {type: Boolean, required:true},
      Summary: {type: String, required:false},
      Level : {type: String, required:true},
      Major: {type: String, required:true},
      GPA: {type: String, required:false},
  }],
    Hobbies : [{type: String, required:false}],
    Achievements: [{
      title: {type: String, required:true},
      summary:{type: String, required:false},
      date : {type : mongoose.Schema.Types.Mixed, required: false}, 
  }],
    Projects : [{
      title: {type: String, required:true},
      summary:{type: String, required:true},
  }],
    Experience : [{
      
      Company : {type: String, required:true},
      startDate : {type : mongoose.Schema.Types.Mixed, required: true},
      endDate : {type : mongoose.Schema.Types.Mixed, required: false},
      present : {type: Boolean, required:true},
      Summary: {type: String, required:false},
  }],
    Skills: [{
      name: {type: String, required:true},
      level: {type : mongoose.Schema.Types.Mixed, unique: true, required: true},
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
