import React, { useState } from "react";
const Portfolio = () => {
   const portfolioItems = [
      {
         id: 7,
         coverImage: "img/audi.png",
         description: "Audi Italy",
         link: "https://www.youtube.com/watch?v=ZxMGUyASHBM",
      },
      {
         id: 2,
         coverImage: "img/odnako.png",
         // coverImage: "https://img.youtube.com/vi/PvxOpaKy2tE/maxresdefault.jpg",
         description: "Odnako Podcast",
         link: "https://www.youtube.com/watch?v=PvxOpaKy2tE",
      },
      
      {
         id: 9,
         coverImage: "img/nike.png",
         // coverImage: "https://img.youtube.com/vi/gB32ig0VbI8/maxresdefault.jpg",
         description: "Nike Italy",
         link: "https://www.youtube.com/watch?v=gB32ig0VbI8",
      },
      {
         id: 12,
         coverImage: "img/sheraton.png",
         // coverImage: "https://img.youtube.com/vi/k9KjM9UWtIA/maxresdefault.jpg",
         description: "Sheraton",
         link: "https://www.youtube.com/watch?v=k9KjM9UWtIA",
      },
      {
         id: 6,
         coverImage: "img/qazaqtelekom.png",
         // coverImage: "https://img.youtube.com/vi/wvseA7Kpy5U/maxresdefault.jpg",
         description: "Qazaqtelecom Podcast",
         link: "https://www.youtube.com/watch?v=wvseA7Kpy5U",
      },
      {
         id: 13,
         coverImage: "img/lexus.png",
         // coverImage: "https://img.youtube.com/vi/w33CdCANns4/maxresdefault.jpg",
         description: "Lexus и Александр Бублик",
         link: "https://www.youtube.com/watch?v=w33CdCANns4",
      },
      {
         id: 11,
         coverImage: "img/dsquared.png",
         // coverImage: "https://img.youtube.com/vi/qMVv49moj7w/maxresdefault.jpg",
         description: "DSQUARED2",
         link: "https://www.youtube.com/watch?v=qMVv49moj7w",
      },
      {
         id: 14,
         coverImage: "img/moskva.png",
         // coverImage: "https://img.youtube.com/vi/gGDvBAZR8u4/maxresdefault.jpg",
         description: "БЦ Москва",
         link: "https://www.youtube.com/watch?v=gGDvBAZR8u4",
      },
      {
         id: 15,
         coverImage: "img/ktj.png",
         // coverImage: "https://img.youtube.com/vi/GsSXbqOsmXo/maxresdefault.jpg",
         description: "КТЖ",
         link: "https://www.youtube.com/watch?v=GsSXbqOsmXo",
      },
      {
         id: 8,
         coverImage: "img/polaroid.png",
         // coverImage: "https://img.youtube.com/vi/CmvuNlQOT-8/maxresdefault.jpg",
         description: "Polaroid",
         link: "https://www.youtube.com/watch?v=CmvuNlQOT-8",
      },
      {
         id: 1,
         coverImage: "img/zere.png",
         // coverImage: "https://img.youtube.com/vi/B0ZC1KtqBt4/maxresdefault.jpg",
         description: "Т/с 'Әділ Зере'. АО 'РТРК Казахстан'",
         link: "https://www.youtube.com/watch?v=B0ZC1KtqBt4",
      },
      {
         id: 4,
         coverImage: "img/nurik.png",
         // coverImage: "https://img.youtube.com/vi/TInM0AJy6pI/maxresdefault.jpg",
         description: "Nurik Barmakov - Ты не такая как все",
         link: "https://www.youtube.com/watch?v=TInM0AJy6pI",
      },
      {
         id: 3,
         coverImage: "img/shekara.png",
         description: "К/ф 'Шекара'",
         link: "https://www.youtube.com/watch?v=rLPnMRVBWoE",
      },
      {
         id: 10,
         coverImage: "img/cft.png",
         // coverImage: "https://img.youtube.com/vi/K-c-CMLjivs/maxresdefault.jpg",
         description: "CFT group",
         link: "https://www.youtube.com/watch?v=K-c-CMLjivs",
      },
      {
         id: 16,
         // coverImage: "https://img.youtube.com/vi/D0erE-ArJeU/maxresdefault.jpg",
         coverImage: "img/molda.png",
         description: "К/ф Молда",
         link: "https://www.youtube.com/watch?v=D0erE-ArJeU",
      },
      {
         id: 5,
         coverImage: "img/uia.png",
         description: "Веб-сериал UIA.kz",
         link: "https://www.youtube.com/watch?v=oJ9oDPD1iYU",
      },
   ];

   const [currentItem, setCurrentItem] = useState(0);

   const handlePaginationClick = (index) => {
      setCurrentItem(index);
   };

   return (
      <div id="portfolio">
         <div className="container">
            <h1 id="title">Реализованные проекты</h1>
            <div className="portfolio">
               {portfolioItems.map((item) => (
                  <div className="item" key={item.id}>
                     <div className="container">
                        <div className="img">
                           <img
                              id="cover"
                              src={item.coverImage}
                              alt={item.description}
                           />
                        </div>
                        <p>{item.description}</p>
                        <a
                           href={item.link}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <img src="img/link.svg" alt="Link" />
                        </a>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Portfolio;
