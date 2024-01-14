import React from "react";
import Path from "../sidebar/path";

const ItemCarousel = ({ item }) => {

  return (
    <div className="flex flex-wrap overflow-hidden h-screen justify-center items-center"> {/* // fila */}
      <div className="w-full md:w-1/2 p-3 h-screen flex justify-center items-stretch"> {/* // columna */}
        <div>
          <img 
            className="h-full w-full object-contain"
          src={
            item.url
          } alt={item.title} />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-3  h-3/4 flex justify-center items-stretch" style={{minHeight: "50%"}}> {/* // columna */}
        <div className="shadow-lg rounded-lg p-5 bg-white"> {/* card-init equivalente */}
          <div className='flex justify-center'>
          <svg  xmlns="http://www.w3.org/2000/svg" viewBox={item.viewBox} className="w-12 h-12 fill-current text-primaryLight">
              {item.icon.map((x, index) => (<Path key={index} path={x.path}/>))}
          </svg>
          </div>
          <h2 className='text-4xl text-center my-4'>{item.title}</h2>
          <ul className="list-disc list-inside p-2">
            {item.list.map((x, index) => (<li>{x}</li>))}
          </ul>
        </div>
      </div>
    </div>
  );
  };

export default ItemCarousel;