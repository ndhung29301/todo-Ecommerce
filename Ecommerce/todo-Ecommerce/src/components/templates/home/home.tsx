import React from "react";

export const Home :React.VFC=():JSX.Element=>{
    return (
        <video loop autoPlay >
            <source
                src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/09tntOurwC_HD.mp4"
                type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
    )
}