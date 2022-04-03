export default interface Iuser {
    _id :string,
    uid:string,
    name:string
}

export const DEFAULT_USER : Iuser = {
    _id:"",
    uid:"",
    name:""
}

export const DEFAULT_FIRE_TOKEN ="";