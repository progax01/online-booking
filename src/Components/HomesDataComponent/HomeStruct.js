import React from 'react';
import { useNavigate } from 'react-router';

const HomeStruct = ({ props }) => {

    const redirect = useNavigate();
    const ClickToHomeInfo = () => redirect(`/homeinfo/${props._id}`,{state:props});

    return (
        <>

            <div className="home-container" onClick={ClickToHomeInfo} key={props._id}>
                <p>{props.name}</p >
                <p>{props.facility}</p >
                <p>{props.state}</p>
                <p> {props.city}</p>
                <p>{props.landmrk}</p >
            </div >

        </>

    );

}

export default HomeStruct;