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
        <nav className="absolute left-0 top-0 z-9999 flex h-screen w-[24%] flex-col overflow-y-hidden bg-custom-gradient duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 -translate-x-full">
            <Profile profile={profile}/>
            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear p-5">
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