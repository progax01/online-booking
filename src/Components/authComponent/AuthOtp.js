import React,{useState} from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router';
import { url } from '../../StaticInfo';
import { PostToApi } from '../../HelperFun/ApiReqHandler';


function AuthOtp() {

    const urlData=useLocation();
    console.log(urlData);
    const redirect=useNavigate();

    const [localOtp,setLocalOtp]=useState('');
    const [authMes ,setAuthMes] =useState('');

    const changeHandler=(e)=>setLocalOtp(e.target.value)

    const authResHandler=(res)=>{
        if(res.isUserAuth && res.isCorrectPassword){
            alert('user succesfully signed up');
            redirect("/loginhome");
        } 
        else if(!res.isCorrectPassword && !res.isCorrectUser)
            setAuthMes('Enter correct otp and password');
        else if( !res.isUserAuth && !res.isCorrectPassword)
            setAuthMes('please enter correct password')
        else
            setAuthMes('something went wrong try again');
    }


    // const ResendOTPFun=(e)=>{

    // }
    
    const VerifySignup=()=>{
    e.preventDefault();
        PostToApi(`${url}/${urlData}/signup/otp`,{...urlData.state,otp: parseInt(localOtp)})
        .then((res)=>authResHandler(res)).catch((err)=>setAuthMes('something went wrong try again'))
    }

    return ( 
    <div className='auth-wrapper'>
    <form className="form">
        <label htmlFor='localOtp' id='auth-otp-label'>Email verification OTP </label>
        <input name='otp' type='text' value={localOtp} onChange={changeHandler} />
        <button type="submit" onClick={VerifySignup} >Verify User</button>
        <p id="warn-message"> {authMes}</p>
    <p id='auth-otp-para'>We just send your OTP via your <br/>email <span id='auth-otp-email'>{ ( urlData.state)?urlData.state.email:''}</span> </p>
    <p id='auth-otp-para2'>The code will expire soon so Hurry up..</p>
    <button id='auth-otp-resend-btn' >Resend OTP</button>
    </form>
   
    </div> );

}
export default AuthOtp;