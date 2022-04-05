import {Document}  from 'mongoose';
import IAchievement from './ResumeSections/Achievement';
import IBasicInfo from './ResumeSections/BasicInfo';
import IEducation from './ResumeSections/Education';
import IProject from './ResumeSections/Project';
import ISkills from './ResumeSections/Skills';
import IExperience from './ResumeSections/Experience';
import IUser from './user';


export default interface IResume extends Document {
    User: IUser,
    BasicInfo :  IBasicInfo | null,
    Education? : IEducation[] |  IEducation | null,
    Hobbies? : string,
    Achievements?: IAchievement | IAchievement[] | null,
    Projects? : IProject | IProject[] | null,
    Experience? : IExperience | IExperience[] | null ,
    Skills : ISkills | ISkills[] ,
    Summary? : string | null,
    Objective? : string | null,

}