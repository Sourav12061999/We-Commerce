export type userData = {
    name:string,
    email:string,
    _id:string,
}

export type authData = {
    isSignin:boolean,
    userData:userData | null,
}