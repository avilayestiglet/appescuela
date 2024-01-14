import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputCustom from '../../../compartido/components/input/input';

const LoginForm = ({ callback, isRemove = false }) => {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    navigate("/dashboard");
  };
  const onRemoveCallback = (value) => {
    callback("register");
  }

  return (
    <form onSubmit={onSubmit} className={"w-1/2 " + (isRemove ? "remove" : "")}>
      <h1 className="text-gray-800 font-bold text-4xl mb-1">Hola!</h1>
      <p className="text-md font-normal mb-7 text-yellow-400">Bienvenido al portal de U.E "Rafael Maria Baralt"</p>
      <InputCustom icon="email" placeholder="Correo electrónico" type="email"/>
      <InputCustom icon="password" placeholder="Contraseña" type="password"/>
      <div className="flex flex-col justify-center text-center">
        <button type="submit" className="block w-full bg-primary mt-4 py-2 rounded-2xl text-white font-semibold mb-2 hover:shadow-xl hover:-translate-y-[0.2] hover:-translate-x-[0.2] transition-all duration-300">
          Iniciar Sesión
        </button>
        <span onClick={onRemoveCallback} className="text-sm ml-2 hover:text-yellow-400 cursor-pointer">
          ¿No te has registrado aún? Regístrate aquí
        </span>
      </div>
    </form>
  );
};

export default LoginForm;