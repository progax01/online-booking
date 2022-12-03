import React, { useState } from 'react'
import '../../Styles/FormStyles.css';
import SignUp from './SignUp';


export default function SignUpHome() {
  const [userStatus, setUserStatus] = useState("tourist");
  const [btnColor,setBtnColor] =useState({b1:"#14bce6" ,b2:"#ff6701" ,b3:"#ff6701"});
 
  const TouristToggler = () => {  setBtnColor({b1:"#14bce6"}); setUserStatus("tourist");}
  const OwnerToggler = () =>{ setBtnColor({b2:"#14bce6"}); setUserStatus("owner");}
  const TourGuideToggler = () => {setBtnColor({b3:"#14bce6"});setUserStatus("tourguide");}

  return (
    <div>
      <div className="home-wrapper">
        <div className="home-inner-wrapper">
          <button className="home-btns" style={{backgroundColor:btnColor.b1}} onClick={TouristToggler}>
            Tourist
          </button>
          <button className="home-btns" style={{backgroundColor:btnColor.b2}}  onClick={OwnerToggler}>
            Home Owner
          </button>
          <button className="home-btns" style={{backgroundColor:btnColor.b3}}  onClick={TourGuideToggler}>
            Tour Guide
          </button>
        </div>
      </div>
      <SignUp userStatus={userStatus} />

    </div>
  )
}