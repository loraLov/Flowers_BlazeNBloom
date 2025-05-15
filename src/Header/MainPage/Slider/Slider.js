import { useState, useEffect } from 'react';
import photo1 from './image1.jpeg';
import photo2 from './image2.jpeg';
import photo3 from './image3.jpeg';
import './Slider.css';


function Slider() {
    const images = [
        photo1,
        photo2,
        photo3
    ];

    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const interval = setInterval (() =>{
            setCurrent (prev => (prev+1) % images.length);
        },3000)
        return () => clearInterval(interval);
    },[images.length])

    return (
        <div className="slider">
          <div className="slider-container">
            <img
              src={images[current]}
              alt={`slide ${current}`}
              className="slide active"
            />
            <div className="slide-caption">
                <div className='news-text'>
              <h2>Peony Season is Here</h2>
              <p className='sale'>Get 25% Off Every Third Bouquet You Order!</p>
                </div>
            </div>
          </div>
        </div>
      );
}
export default Slider;