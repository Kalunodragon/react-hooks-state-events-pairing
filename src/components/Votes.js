import React, { useState } from "react";

function Votes({ upvotes, downvotes }){
    const [up, setUp] = useState(upvotes)
    const [down, setDown] = useState(downvotes)

    function handleClickedVote(event){
        const voteType = event.target.name

        voteType === "upvotes" ? setUp(upvotes => upvotes += 1) : setDown(downvotes => downvotes += 1)
    }

    return(
        <>
            <button
                name="upvotes"
                onClick={handleClickedVote}>
                    {up}👍
            </button>
            <button
                name="downvotes"
                onClick={handleClickedVote}>
                    {down}👎
            </button>
        </>
    )
}

export default Votes

// "👍" "👎"