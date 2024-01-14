import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import InputCustom from "../../../compartido/components/input/input";

const RegisterForm = ({ callback, isRemove = false }) => {
    const navigate = useNavigate();

	const onSubmit = () => {
		navigate("/dashboard");
	}
    const onRemoveCallback = (value) => {
        callback("login");
      }
    return (
    <form onSubmit={onSubmit} className={"w-1/2 " + (isRemove ? "remove": "")}>
        <h1 className="text-gray-800 font-bold text-2xl mb-1">Registrate!</h1>
        <p className="text-sm font-normal text-gray-600 mb-7">Bienvenido</p>
        <InputCustom placeholder="Nombre Completo" icon="people"/>
        <InputCustom placeholder="Nombre De Usuario" icon="name"/>
        <InputCustom placeholder="Correo Electrónico" icon="email"/>
        <InputCustom placeholder="Contraseña" icon="password"/>
        <div className="flex flex-col justify-center text-center">
            <button type="submit" className="block w-full bg-primary mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Registrarse</button>
            <span onClick={onRemoveCallback} className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Ya estás registrado ?</span>
        </div>
    </form>);
}

export default RegisterForm;