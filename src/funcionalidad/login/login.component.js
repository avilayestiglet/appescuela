import React, { useState } from "react";
import heroImage from '../../assets/images/hero.png';
import logo from '../../assets/images/logo.png';
import LoginForm from "./components/login.form.component";
import RegisterForm from "./components/register.form.component";
import FooterComponent from "./components/footer.component";



const LoginComponent = () => {
	
	const [state, setState] = useState({
		login: false,
		register: true
	});

	const handleCallback = (value) => {
		value === "login" ? setState({ login: false, register: true }) :
		value === "register" ? setState({ login: true, register: false }) :
		setState(state)
	};
	return (
		<div className="h-screen flex flex-col justify-between">
			<div className="flex h-[85%]">
				<div
					className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr  i justify-around items-center hidden">
					<div className="text-center flex flex-col justify-center items-center">
						<div className="flex flex-row">
							<img src={logo} className="object-fill" style={{width: '45px', marginTop: '-22px'}}/>
							<span className="text-4xl" style={{fontWeight: 'bold'}}>
							Unidad Educativa
							</span>
						</div>
						<h1 className="text-5xl my-4 text-yellow-400">
							"Rafael Maria Baralt"
						</h1>
						<img src={heroImage} alt="" className="move-top-bottom"/>
					</div>
				</div>
				<div className="flex md:w-1/2 justify-center py-10 items-center circle-right overflow-hidden">
					<div className="section c-transition">
						<LoginForm isRemove={state.login} callback={handleCallback}/>
						<RegisterForm isRemove={state.register} callback={handleCallback}/>
					</div>
				</div>
			</div>
			<FooterComponent />
		</div>
		);
};

export default LoginComponent;