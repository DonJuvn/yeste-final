import React, { useState } from "react";
const SplashScreen = ({ isAnimating }) => {
   const [isVisible, setIsVisible] = useState(true);

   const handleAnimationEnd = () => {
      // Hide the splash screen when the animation ends
      setIsVisible(false);
   };

   // Don't render the splash screen if it's not visible
   if (!isVisible) {
      return null;
   }

   return (
      <div
         className={`splash-screen ${!isAnimating ? "animate-out" : ""}`}
         onAnimationEnd={handleAnimationEnd}
      >
         <img id="comp" src="img/logo-1.svg" alt="Logo" className="logo" />
         {/* <img id='phone' src="img/logo.png" alt="Logo" className="logo" /> */}
      </div>
   );
};

export default SplashScreen;
