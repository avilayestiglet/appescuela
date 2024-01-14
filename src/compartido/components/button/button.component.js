import React from "react";
import LoadingButton from "./loading.button";

const roles = {
    primary: "block w-full bg-primary py-2 px-6 rounded-2xl text-white font-semibold mb-4 hover:shadow-xl hover:-translate-y-[0.2] hover:-translate-x-[0.2] transition-all duration-300",
    clean: "flex justify-center rounded-2xl border border-stroke py-2 px-6 font-medium text-slate-800 hover:shadow-1 mb-4 w-full"
}

const ButtonCustom = ({ 
    type = "submit",
    role = "primary",
    isLoading = false,
    children = "",
    callback
 }) => {

    return (
        <button 
            onClick={callback}
            type={type}
            className={roles[role]}>
            {isLoading ? <LoadingButton />  :children}
        </button>
    )
};

export default ButtonCustom;