import React from "react";const Footer = () => {
   return (
      <div id="footer">
         <div className="container">
            <div className="footer">
               <div className="logo">
                  <img src="img/logo.svg" alt="" />
               </div>
               <div className="social-media">
                  <a href="https://www.instagram.com/yeste.pictures?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                     Instagram
                     <img src="img/link.svg" alt="" />
                  </a>
                  <a href="#">
                     Youtube
                     <img src="img/link.svg" alt="" />
                  </a>
                  <a href="tel:+77071717730">
                     +7 (707) 171 77 30
                     <img src="img/link.svg" alt="Call Link" />
                  </a>
                  <a href="mailto:Majjandi@yeste.kz">
                     Majjandi@yeste.kz
                     <img src="img/link.svg" alt="Email Link" />
                  </a>
               </div>
               <div className="line"></div>
               <div className="text">
                  <p>Мы всегда рады любым идеям и предложениям</p>
               </div>
               <div className="confi">
                  <p>
                     © 2024. <br />
                     Все права защищены.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
