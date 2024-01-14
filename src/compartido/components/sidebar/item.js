import React from "react";
import Path from "./path";
import { Link } from "react-router-dom";

const Item = ({ item, callback }) => {
    
    return (
        <li onClick={ () => callback(item)} className={" hover:bg-slate-300 hover:text-primary rounded-lg " + (item.isSelected ? "bg-slate-300 text-primary ": "text-slate-100 bg-gray-800 ")}>
            <Link to={item.path} rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={item.viewBox} className="w-5 h-5 fill-current dark:text-gray-400">
                    {item.icon.map((x, index) => (<Path key={index} path={x.path}/>))}
                </svg>
                <span>{item.name}</span>
            </Link>
        </li>
    );
}

export default Item;