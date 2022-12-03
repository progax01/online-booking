import React from 'react'

const Styles={
        animation: "1.5s linear infinite spinner",
        animationPlayState: "inherit",
        border: "solid 5px #cfd0d1",
        borderBottomColor: "#1c87c9",
        borderRadius: "50%",
        content: "",
        height: "40px",
        position: "absolute",
        top: "10%",
        left: "10%",
        transform: "translate3d"
}
function Spinner() {
    return ( 
        <div style={Styles}></div>
     )
}


export default Spinner;