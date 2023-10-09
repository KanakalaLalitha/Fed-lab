import React from "react";
function ThirdChild(props){
    const{color,backcolor}=props;
    return(
        <div>
            <h1 style={{color:color,backcolor:backcolor}}> Props Drilling</h1>
        </div>
    )
}
export default ThirdChild;