import React from "react";
import heroImage from '../../assets/images/hero.png';
import logo from '../../assets/images/logo.png';
import InputCustom from "../../compartido/components/input/input";
import { Navigate, useNavigate } from "react-router-dom";



const LoginComponent = () => {
	const navigate = useNavigate();

	const onSubmit = () => {
		navigate("/dashboard");
	}
return (
	<div className="h-screen md:flex">
	<div
		className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr  i justify-around items-center hidden">
		<div className="text-center flex flex-col justify-center items-center">
      <div className="flex flex-row">
				<img src={logo} className="object-fill" style={{width: '45px', marginTop: '-22px'}}/>
				<span className="text-2xl" style={{fontWeight: 'bold'}}>
				Unidad Educativa
				</span>
			</div>
			<h1 className="text-4xl my-4 text-yellow-400">
				"Rafael Maria Baralt"
			</h1>
			<img src={heroImage} alt="" className="move-top-bottom"/>
		</div>
		
	</div>
	<div className="flex md:w-1/2 justify-center py-10 items-center bg-white section">
		<form onSubmit={onSubmit}>
			<h1 className="text-gray-800 font-bold text-2xl mb-1">Hola!</h1>
			<p className="text-sm font-normal mb-7 text-yellow-400">Bienvenido al portal de U.E"Rafael Maria Baralt"</p>
			<InputCustom icon="email" placeholder="Correo electrónico" type="email"/>
			<InputCustom icon="password" placeholder="Contraseña" type="password"/>
			<div className="flex flex-col justify-center text-center">
				<button type="submit" className="block w-full bg-blue-900 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 hover:shadow-xl hover:-translate-y-[0.2] hover:-translate-x-[0.2] transition-all duration-300">Iniciar Sesión</button>
				<a href={"/register"} className="text-sm ml-2 hover:text-yellow-400 cursor-pointer">No te haz registro aun ? Registrate acá </a>
			</div>
		</form>
	</div>
</div>
    );
};

export default LoginComponent;