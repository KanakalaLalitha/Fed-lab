import React from "react";
import SecondChild from './SecondChild';
function Child(props){
    const{color,backcolor}=props;
    console.log("First Child");
    console.log('color',color);
    console.log('Backcolor',backcolor);
    return(
        <div>
            <SecondChild color={color} backcolor={backcolor}/>
        </div>
    )
}
export default Child;