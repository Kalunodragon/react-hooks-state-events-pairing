import React, { useState } from "react";
import Comments from "./Comments";

function ComButton({ props }){
    const [show, setShow] = useState(true)

    function handleClickedButton(){
            setShow(current => !current)
    }

    return(
        <div>
            <button onClick={handleClickedButton}>
                {show ? "Hide Comments" : "Show Comments"}
            </button>
            {show ? <Comments props={props}/> : null}
        </div>
    )
}

export default ComButton