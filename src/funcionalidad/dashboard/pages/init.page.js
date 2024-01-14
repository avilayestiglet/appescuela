import React from "react";
import CarouselComponent from "../../../compartido/components/carrousel/carrousel.component";
import listCarrousel from "../config/list.carrousel";

const InitPage= () => {
    return (
        <div className="w-full">
            <CarouselComponent items={listCarrousel}/>
        </div>
    )
 };

 export default InitPage;