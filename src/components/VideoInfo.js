import React from "react";

function VideoInfo({props}){
    const { title, embedUrl, views, createdAt } = props

    return(
        <>
            <iframe
                title={title}
                src={embedUrl}
                width="919"
                height="525"
                allowFullScreen
            />
                <h1>{title}</h1>
            <p>{views} {createdAt}</p>
        </>
    )
}

export default VideoInfo