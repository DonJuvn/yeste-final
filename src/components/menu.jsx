import React, { useState } from "react";const Menu = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div id="menu">
         <div className="container">
            <div className="menu">
               <div className="logo">
                  <img src="img/logo-1.svg" alt="" />
               </div>
               <div className="hamburger" onClick={toggleMenu}>
                  <div></div>
                  <div></div>
                  <div></div>
               </div>
               <div className={`navigation ${isOpen ? "open" : ""}`}>
                  <a href="#counters">О нас</a>
                  <a href="#portfolio">Портфолио</a>
                  <a href="#footer" id="call">
                     Связаться с нами <img src="img/link.svg" alt="" />
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Menu;
