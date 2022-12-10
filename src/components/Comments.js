import React from "react";

function Comments({ props }){
    const commentList = props

    return(
        <div>
            {commentList.map(obj => (
                <div key={obj.id}>
                    <h3>{obj.user}</h3>
                    <p>{obj.comment}</p>
                </div>
            ))}
        </div>
    )
}


export default Comments