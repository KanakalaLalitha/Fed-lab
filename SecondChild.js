import React from "react";
import ThirdChild from './ThirdChild';
function SecondChild(props){
    const{color,backcolor}=props;
    console.log("Scecond Child");
    console.log('Color',color);
    console.log('BackGround Color',backcolor);
    return(
        <div>
            <ThirdChild color={color} backcolor={backcolor}/>
        </div>
    )
}
export default SecondChild;