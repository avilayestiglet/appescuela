import React, { useState } from "react";
import Item from "./item";
import Profile from "./profile";



const Siderbar = ({ profile, list }) => {

    const [items, setItems] = useState(list.items)
    const { itemsFooter } = list;

    const itemSelected = (item) => { 
        let newItems = items.map((it) => item.name === it.name ? { ...it, isSelected: true } : {...it, isSelected: false});
        setItems(newItems);
    };
    
    return (
        <nav className="h-screen p-3 space-y-2 w-1/5 dark:bg-gray-900 dark:text-gray-100 bg-primary ">
            <Profile />
            <div className="divide-y dark:divide-gray-700">
                <ul className="pt-2 pb-4 space-y-1 text-sm">
                    {items?.map(( x, index ) => (<Item key={index} item={x} callback={itemSelected}/>))}
                </ul>
                <ul className="pt-4 pb-2 space-y-1 text-sm">
                    {itemsFooter?.map(( s, index ) => (<Item key={index} item={s}/>))}
                </ul>
            </div>
        </nav>
    );
}

export default Siderbar;