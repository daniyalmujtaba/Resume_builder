import {Document}  from 'mongoose';

  enum Profiency {
      "Advanced",
      "Basic",
      "Intermediate"
  }

export default interface  ISkills extends Document {
    name: string,
    level?: Profiency,

}
