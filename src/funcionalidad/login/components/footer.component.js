// FooterComponent.jsx
import React from "react";
import TimeComponent from "../../../compartido/components/time/time.component";

const FooterComponent = () => {
  return (
    <footer className="bg-primary text-white text-center p-4 h-[14%]">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Unidad Educativa "Rafael Maria Baralt". Todos los derechos reservados.
        </p>
        <TimeComponent />
      </div>
    </footer>
  );
};

export default FooterComponent;
