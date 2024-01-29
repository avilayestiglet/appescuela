import React from "react";
import Path from "../sidebar/path";

const ItemCarousel = ({ item }) => {
  return (
    <div className="flex flex-wrap h-full justify-center items-center overflow-hidden">
      <div className="w-full md:w-1/2 px-2 pt-2 h-full flex justify-start items-start">
        <img className="h-30 w-30" src={item.url} alt={item.title} />
      </div>
      <div className="w-full md:w-1/2 px-3 pt-3 h-full ">
        <div className="shadow-sm rounded-lg p-2 bg-inherit">
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox={item.viewBox}
              className="w-6 h-6 fill-current text-red-600"
            >
              {item.icon.map((x, index) => (<Path key={index} path={x.path} />))}
            </svg>
          </div>
          <h2 className="text-3xl text-center my-4">{item.title}</h2>
          <ul className="list-disc list-inside p-2">
            {item.list.map((x, index) => (<li>{x}</li>))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemCarousel;
