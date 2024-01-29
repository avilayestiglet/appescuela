import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import InputCustom from "../../../compartido/components/input/input";
import loginApiService from "../services/login.service";
import ButtonCustom from "../../../compartido/components/button/button.component";
import ModalErrorComponent from "../../../compartido/components/modal/modal.error.component";
import ModalInfoComponent from "../../../compartido/components/modal/modal.info.component";


const RegisterForm = ({ callback, isRemove = false }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: null,
    password: null
  });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault(); // Evitar el envío del formulario por defecto
    // Aquí agregarías la lógica para enviar los datos del formulario a tu servidor
    setIsLoading(true);
    setErrors({
      email: null,
      password: null
    })
      
    if (email=="") {
      setIsLoading(false);
      setErrors({
        ...errors,
        email: "Por favor, ingrese su correo electrónico."
      });
      setIsError(true);
      return;
    }

    if (password=="") {
      setIsLoading(false);
      setErrors({
        ...errors,
        password: "Por favor, ingrese su contraseña."
      });
      setIsError(true);
      return;
    }

    // Validar el formulario

    // Validar el formato del correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@gmail.com$/; 
    if (!emailRegex.test(email)) {
      setIsLoading(false);
      setErrors({
        ...errors,
        email: "El correo electrónico no tiene el formato correcto."
      });
      setIsError(true);
      return;
    }

  // Validar la contraseña
const passwordRegex = /^[0-9]{8,}$/;
if (!passwordRegex.test(password)) {
  setIsLoading(false);
  setErrors({
    ...errors,
    password: "La contraseña debe ser de 8 dígitos y solo números."
  });
  setIsError(true);
  return;
}

    // Enviar los datos del formulario al servidor
    loginApiService.register({ email, password })
      .subscribe((result) => {
        setIsError(false);
          setErrors({
            email: null,
            password: null
        });
        setIsLoading(false);
        if (result.status == 200) {
         
          
          setSuccessMessage(result.message ?? "Se ah registrado con éxito!")
          setShowModalSuccess(true);
          // Mostrar el mensaje de registro exitoso
          // Redirigir al usuario a la página de inicio de sesión
          
        } else{
          setShowModal(true);
          setError(result);
        
        }
      });
  };
  const onRemoveCallback = (value) => {
    callback("login");
  };

  const hiddenModal = () => {
    setShowModal(false)
  }

  const keypressErrorInput = (event) => {
    setIsError(false);
  }

  const closeSuccessModal = () => {
    setEmail(null);
    setPassword(null);
    setErrors({
      email: null,
      password: null
    });
    setShowModalSuccess(false);
  };

  return (
    <form onSubmit={onSubmit} className={"w-1/2 " + (isRemove ? "remove" : "")}>
        <ModalErrorComponent show={showModal} title={"Error al registrar usuario"} message={error?.error ?? ""} callback={hiddenModal}/>
        <ModalInfoComponent show={showModalSuccess} title="Éxito" message={successMessage} callback={closeSuccessModal}/>
      <h1 className="text-gray-800 font-bold text-2xl mb-1"><center>Registrate!</center></h1>
      <p className="text-sm font-normal text-gray-600 mb-7">Bienvenido</p>
    
      <InputCustom
        placeholder="Correo Electrónico"
        icon="email"
        value={email}
        name="email"
        onChanged={(e) => setEmail(e.target.value)}
        error={errors.email}
        isError={isError}
        isLoading={isLoading}
        onKeypress={keypressErrorInput}
      />
      <InputCustom
        placeholder="Contraseña"
        icon="password"
        value={password}
        name="password"
        onChanged={(e) => setPassword(e.target.value)}
        error={errors.password}
        isError={isError}
        isLoading={isLoading}
        onKeypress={keypressErrorInput}
      />
      <div className="flex flex-col justify-center text-center">
            <ButtonCustom  isLoading={isLoading} type="submit" children="Registrarse"/>
            <span onClick={onRemoveCallback} className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Ya estás registrado ?</span>
        </div>
    </form>);
}

export default RegisterForm;