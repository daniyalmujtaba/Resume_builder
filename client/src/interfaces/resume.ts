


export default interface IResume {
  Title: String,
  BasicInfo : Object,
  _id : String,
  User : String,
  Experience :Array<Object> | null,
  Skills : Array<Object> ,
  Education :  Array<Object> | null,
  Hobbies? : Array<Object> | null,
  Achievements? : Array<Object> | null,
  Projects? : Array<Object> | null,
  Summary?: String | null,
  Obective? : String | null,
}

