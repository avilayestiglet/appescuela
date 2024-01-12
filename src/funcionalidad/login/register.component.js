import React from "react";
import heroImage from '../../assets/images/hero.png';
import logo from '../../assets/images/logo.png';
import InputCustom from "../../compartido/components/input/input";
import { useNavigate } from "react-router-dom";


const RegisterComponent = () => {
	const navigate = useNavigate();
	const onSubmit = () => {
		navigate("/dashboard");
	}

    return (
<div className="h-screen md:flex">
	<div
		className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-white-100 i justify-around items-center hidden">
		<div className="text-center flex flex-col justify-center items-center">
      <div className="flex flex-row">
        <img src={logo} className="object-fill" style={{width: '45px', marginTop: '-22px'}}/>
        <span className="text-2xl" style={{fontWeight: 'bold'}}>
          Unidad Educativa
        </span>
      </div>
      <h1 className="text-4xl mt-4 text-yellow-400">
        "Rafael Maria Baralt"
      </h1>
      <img src={heroImage} alt="" />
		</div>
		
	</div>
	<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form onSubmit={onSubmit} className="bg-white">
			<h1 className="text-gray-800 font-bold text-2xl mb-1">Registrate!</h1>
			<p className="text-sm font-normal text-gray-600 mb-7">Bienvenido</p>
			<InputCustom placeholder="Nombre Completo" icon="people"/>
			<InputCustom placeholder="Nombre De Usuario" icon="name"/>
			<InputCustom placeholder="Correo Electrónico" icon="email"/>
			<InputCustom placeholder="Contraseña" icon="password"/>
			<div className="flex flex-col justify-center text-center">
				<button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Registrarse</button>
				<a href={"/login"} className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Ya estás registrado ?</a>
			</div>
		</form>
	</div>
</div>
    );
};

export default RegisterComponent;