import React, { useEffect } from "react";

const Counters = () => {
   useEffect(() => {
      // Start counting animation when the component is mounted
      animateCounter(1, 10000000);  // 10,000,000+
      animateCounter(2, 14);         // 10
      animateCounter(3, 100);        // 100+
      animateCounter(4, 20);         // 20
   }, []);

   const animateCounter = (id, target, duration = 10000) => {
      const counter = document.getElementById(`counter-${id}`);
      if (!counter) return;

      let start = 0;
      const increment = Math.ceil(target / (duration / 16)); // Approximation for 60 FPS
      const updateCounter = () => {
         start += increment;
         if (start >= target) {
            counter.textContent = `${target.toLocaleString()}+`;
         } else {
            counter.textContent = `${start.toLocaleString()}+`;
            requestAnimationFrame(updateCounter);
         }
      };
      requestAnimationFrame(updateCounter);
   };

   return (
      <div id="counters">
         <div className="container">
            <div className="counters">
               <div id="1" className="item">
                  <h1 id="counter-1">0</h1>
                  <p>просмотров в социальных сетях</p>
               </div>
               <div id="2" className="item">
                  <h1 id="counter-2">0</h1>
                  <p>
                     кинопроектов <br />
                     собственного производства
                  </p>
               </div>
               <div id="3" className="item">
                  <h1 id="counter-3">0</h1>
                  <p>проектов</p>
               </div>
               {/* <div id="4" className="item">
                  <p>более</p>
                  <h1 id="counter-4">0</h1>
                  <p>партнеров</p>
               </div> */}
            </div>
         </div>
      </div>
   );
};

export default Counters;
