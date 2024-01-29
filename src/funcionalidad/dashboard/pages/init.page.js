import React from "react";
import CarouselComponent from "../../../compartido/components/carrousel/carrousel.component";
import listCarrousel from "../config/list.carrousel";
import HeaderComponentRoute from "../components/header/header.component";

const InitPage = () => {
  return (
    <div>
      <HeaderComponentRoute
        item={{
          title: "Inicio",
          name: "Inicio",
          parent: "Dashboard",
        }}
      />
      <CarouselComponent items={listCarrousel} />
    </div>
  );
};

export default InitPage;
