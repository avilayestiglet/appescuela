// FloatingActionButton.jsx
import React, { useState } from 'react';

const roles = {
    primary: "p-0 w-14 h-14 bg-primary text-center rounded-full hover:bg-primaryDark active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none",
    primaryLight: "p-0 w-14 h-14 bg-primaryLight text-center rounded-full hover:bg-primary active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none",
    error: "p-0 w-14 h-14 bg-red-600 text-center rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
}

const ActionButton = ({ 
    type = "submit",
    role = "primary",
    children = "",
    callback
 }) => {
    return (
        <button
            type={type}
            onClick={callback} 
            className={roles[role]}>
            {children}
        </button>
    );
};

export default ActionButton;