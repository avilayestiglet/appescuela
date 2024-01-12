import React from "react";
import heroImage from '../../assets/images/hero.png';
import logo from '../../assets/images/logo.png';


const LoginComponent = () => {
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
		<form className="">
			<h1 className="text-gray-800 font-bold text-2xl mb-1">Hola!</h1>
			<p className="text-sm font-normal mb-7 text-yellow-400">Bienvenido al portal de U.E"Rafael Maria Baralt"</p>
			<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
					viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
						d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
				</svg>
				<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Correo electrónico" />
			</div>
			<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fillRule="evenodd"
						d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
						clipRule="evenodd" />
				</svg>
				<input typeof="password" className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Contraseña" />
			</div>
			<div className="flex flex-col justify-center text-center">
				<button type="submit" className="block w-full bg-blue-900 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 hover:shadow-xl hover:-translate-y-[0.2] hover:-translate-x-[0.2] transition-all duration-300">Iniciar Sesión</button>
				<span className="text-sm ml-2 hover:text-yellow-400 cursor-pointer">No te haz registro aun ? Registrate acá </span>
			</div>
		</form>
	</div>
</div>
    );
};

export default LoginComponent;