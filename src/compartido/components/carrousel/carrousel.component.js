import React, { useState, useEffect } from "react";
import ItemCarousel from "./item.carrousel";
import ofrecemos from "../../../assets/images/ofrecemos.png";

const CarouselComponent = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Cambia al siguiente ítem cada 3 segundos
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Intervalo de 3000ms (3 segundos)
      return () => clearInterval(interval);
    }, [items.length]);
  
    return (
      <div className="relative overflow-hidden">
        <div className="whitespace-nowrap transition-transform duration-500 ease-linear" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {items.map((item, index) => (
            <div key={index} className="inline-block w-full">
              <ItemCarousel key={index} item={item} />
            </div>
          ))}
        </div>
      </div>
    );
  };

export default CarouselComponent;