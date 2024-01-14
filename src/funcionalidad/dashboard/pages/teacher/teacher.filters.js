import React from "react";
import ButtonCustom from "../../../../compartido/components/button/button.component";

const TeacherFilters = ({ onSubmit, clean, isLoading }) => {
    return (
        <div className="w-full border-b border-strokedark border-[#eee] flex flex-wrap justify-end">
        <form onSubmit={onSubmit} className="w-1/2 flex flex-row">
            <div className="w-1/2 p-2">
            <ButtonCustom
                role="clean"
                type="button"
                children="Limpiar"
                callback={clean}
            />
            </div>
            <div className="w-1/2 p-2">
            <ButtonCustom
                role="primary"
                type="submit"
                children="Buscar"
                isLoading={isLoading}
            />
            </div>
        </form>
        </div>
    );
};

export default TeacherFilters;