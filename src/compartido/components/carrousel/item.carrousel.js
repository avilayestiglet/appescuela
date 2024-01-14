import React from "react";
import Path from "../sidebar/path";
import ofrecemos from "src/"

const ItemCarousel = ({ item }) => {
    return (
    <div className="flex flex-wrap overflow-hidden"> {/* // fila */}
      <div className="w-full md:w-1/2 p-3"> {/* // columna */}
        <div>
          <img src={item.url} alt={item.title} />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-3"> {/* // columna */}
        <div className="shadow-lg rounded-lg p-4"> {/* card-init equivalente */}
          <div className='flex justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox={item.viewBox} className="w-5 h-5 fill-current dark:text-gray-400">
              {item.icon.map((x, index) => (<Path key={index} path={x.path}/>))}
          </svg>
          </div>
          <h2 className='text-2xl text-center mt-4'>HORARIO</h2>
          <ul className="list-disc list-inside">
            <li>7:30am - 8:00am Recepción de niños.</li>
            <li>8:00am - 1:00pm Clases (Prekinder y 1o. de Kinder.)</li>
            <li>8:00am - 1:30pm Clases (2do. y 3ero. de Kinder).</li>
          </ul>
        </div>
      </div>
    </div>
  );
  };

export default ItemCarousel;