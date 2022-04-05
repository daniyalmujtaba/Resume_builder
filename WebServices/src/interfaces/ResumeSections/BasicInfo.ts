import {Document}  from 'mongoose';


export default interface IBasicInfo extends Document {
    
    Name  : string,
    
    PhoneNumber : string,
    Email : string,
    Address : string,
    Web_url? : string,
    Linkedin_profile? : string
}