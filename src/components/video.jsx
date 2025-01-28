import React from "react";
const Video = () => {
   return (
      <div id="video">
         {/* <div className="content">
            <img src="img/logo.svg" alt="" />
         </div> */}
         <video autoPlay loop muted playsInline className="background-video">
            <source src="/img/main.mp4" type="video/mp4" />
            {/* <source src="/img/main.mp4" type="video/mp4" /> */}
            Your browser does not support the video tag.
         </video>
         <div className="filter"></div>
      </div>
   );
};

export default Video;
