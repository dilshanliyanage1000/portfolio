import React, { useEffect } from 'react';

import '../assets/css/Slider.css';

const slidesData = [
  { id: 1, image: '../assets/img/udaya_logo.png', author: 'Author 1' },
  { id: 2, image: '../assets/img/3S.png', author: 'Author 2' },
  { id: 3, image: '../assets/img/android.png', author: 'Author 3' },
  { id: 4, image: '../assets/img/htmlcss.png', author: 'Author 4' },
  { id: 5, image: '../assets/img/wecare.png', author: 'Author 5' },
];

const App = () => {
  useEffect(() => {
    slidesData.forEach((slide) => {
      const element = document.getElementById(`slide-${slide.id}`);
      if (element) {
        element.innerHTML = `
          <img src="${slide.image}" alt="">
          <p class="author-info">
            Photo by ${slide.author}
          </p>
        `;
      }
    });
  }, []);

  return (
    <div className="slide_box">
        <div className="slider">
            <div className="slides">
                {slidesData.map((slide) => (
                <div key={slide.id} id={`slide-${slide.id}`} className="slide">
                    {slide.id}
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default App;
