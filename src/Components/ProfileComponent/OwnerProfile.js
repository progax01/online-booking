import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';



const OwnerProfile=()=> {
    const [profile,setProfile]=useState( useSelector((s)=>s.authContext.userData.userAccData)  );


    return ( 
        <>
        <h1>Hi {profile.name} !!!</h1>
        </>
     );
    ;
}

export default OwnerProfile;