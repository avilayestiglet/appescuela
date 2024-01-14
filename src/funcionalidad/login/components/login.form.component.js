import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputCustom from '../../../compartido/components/input/input';
import loginApiService from '../services/login.service';
import ButtonCustom from '../../../compartido/components/button/button.component';
import ModalErrorComponent from '../../../compartido/components/modal/modal.error.component';
const LoginForm = ({ callback, isRemove = false }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    setIsLoading(true);
    const response = loginApiService.login({ email, password });
    response.subscribe((data => {
      console.log(data);
      setIsLoading(false);
      if(data.status == 200) {
        if(data.token != null && data.token != undefined) {
          localStorage.setItem('token', data.token)
          navigate('/dashboard')
        }
      }else{
        setShowModal(true);
        setError(data);
      }
    }))
  };
  
  const onRemoveCallback = (value) => {
    callback("register");
  }
  const hiddenModal = () => {
    setShowModal(false)
  }

  return (
    <form onSubmit={onSubmit} className={"w-1/2 " + (isRemove ? "remove" : "")}>
      <ModalErrorComponent show={showModal} title={"Error al iniciar sesión"} message={error?.error ?? ""} callback={hiddenModal}/>
      <h1 className="text-gray-800 font-bold text-4xl mb-1">Hola!</h1>
      <p className="text-md font-normal mb-7 text-yellow-400">Bienvenido al portal de U.E "Rafael Maria Baralt"</p>
      <InputCustom icon="email" placeholder="Correo electrónico" type="email" value={email} onChanged={(e) => setEmail(e.target.value)} disabled={isLoading}/>
      <InputCustom icon="password" placeholder="Contraseña" type="password" value={password} onChanged={(e) => setPassword(e.target.value)} disabled={isLoading}/>
      <div className="flex flex-col justify-center text-center">
        <ButtonCustom children={"Iniciar Sesión"} isLoading={isLoading} role={"primary"} type={"submit"}/>
        <span onClick={onRemoveCallback} className="text-sm ml-2 hover:text-yellow-400 cursor-pointer">
          ¿No te has registrado aún? Regístrate aquí
        </span>
      </div>
    </form>
  );
};

export default LoginForm;