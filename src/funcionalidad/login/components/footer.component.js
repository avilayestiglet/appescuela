// FooterComponent.jsx
import React from "react";
import TimeComponent from "../../../compartido/components/time/time.component";

const FooterComponent = () => {
    return (
        <footer className="bg-primary text-white text-center p-4 h-[15%]">
            <div className="container mx-auto">
                <TimeComponent />
                <p className="text-sm mt-2">
                    &copy; {new Date().getFullYear()} Unidad Educativa "Rafael Maria Baralt". Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}

export default FooterComponent;