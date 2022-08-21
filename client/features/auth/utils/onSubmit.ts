import { ChangeEvent } from "react";
import { authActions } from "../../../redux/auth/authSlice";
const onSubmit = async (e: ChangeEvent<HTMLFormElement>, url: string,dispatch:Function) => {
    const {authSuccess} = authActions;
    e.preventDefault();
    let form = e.target;
    let data:formData = {
      email:form.email.value,
      password:form.password.value,
    }
    if(form.signupName != undefined){
        data.name = form.signupName.value;
    }

    if(data.email === "" || data.password === "" || data.name === ""){
       return;
    }

    try {
        let res = await fetch(url,{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body:JSON.stringify(data)
        });
        let authData =  await res.json();
        if(!authData.isError && !authData.isSuccess){
            alert(authData.msg);
            return;
        }
        dispatch(authSuccess({userData:authData.userData,isSignin:true}));

        localStorage.setItem("userID",JSON.stringify(authData.userData._id))
        
    } catch (error) {
        console.log(error);
        
    }

};

export default onSubmit;

interface formData {
    email:string;
    password:string;
    name?:string;
}
