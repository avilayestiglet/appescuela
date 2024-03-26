import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputCustom from "../../../compartido/components/input/input";
import loginApiService from "../services/login.service";
import ButtonCustom from "../../../compartido/components/button/button.component";
import ModalErrorComponent from "../../../compartido/components/modal/modal.error.component";
import ModalInfoComponent from "../../../compartido/components/modal/modal.info.component";
import { useForm } from "react-hook-form";
import registerUser from "../validations/register.user";


const RegisterForm = ({ callback, isRemove = false }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const onSubmit = async (form) => {
    setIsLoading(true);

    loginApiService.register(form).subscribe({
      next: (data) => {
        console.log(data)
        // if (data.token) {
        //   // localStorage.setItem("user", JSON.stringify(data));
        //   // navigate("/dashboard");
        // } else {
        //   setShowModal(true);
        //   setError(data);
        // }
        setIsLoading(false);
      },
      error: (error) => {
        setShowModal(true);
        setError(error);
        setIsLoading(false);
      },
    }) 
  };
  const onRemoveCallback = (value) => {
    callback("login");
  };

  const hiddenModal = () => {
    setShowModal(false)
  }



  const closeSuccessModal = () => {
    setShowModalSuccess(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"w-1/2 " + (isRemove ? "remove" : "")}>
        <ModalErrorComponent show={showModal} title={"Error al registrar usuario"} message={error?.error ?? ""} callback={hiddenModal}/>
        <ModalInfoComponent show={showModalSuccess} title="Éxito" message={successMessage} callback={closeSuccessModal}/>
      <h1 className="text-gray-800 font-bold text-2xl mb-1"><center>Registrate!</center></h1>
      <p className="text-sm font-normal text-gray-600 mb-7">Bienvenido</p>
      <InputCustom
        id="name_register"
        name="name_register"
        register={register("name", registerUser.name)}
        isError={!!errors.name}
        error={errors.name?.message}
        icon="people"
        placeholder="Nombre"
        type="text"
        disabled={isLoading}
      />
      <InputCustom
        id="lastname_register"
        name="lastname_register"
        register={register("lastname", registerUser.lastname)}
        isError={!!errors.lastname}
        error={errors.lastname?.message}
        icon="people"
        placeholder="Apellido"
        type="text"
        disabled={isLoading}
      />
      <InputCustom
        id="email_register"
        name="email_register"
        register={register("email", registerUser.email)}
        isError={!!errors.email}
        error={errors.email?.message}
        icon="email"
        placeholder="Correo electrónico"
        type="email"
        disabled={isLoading}
      />
      <InputCustom
        id="password_register"
        name="password_register"
        register={register("password", {
          required: "Por favor, ingrese contraseña.",
        })}
        isError={!!errors.password}
        error={errors.password?.message}
        icon="password"
        placeholder="Contraseña"
        type="password"
        disabled={isLoading}
      />
      <div className="flex flex-col justify-center text-center">
            <ButtonCustom  isLoading={isLoading} type="submit" children="Registrarse"/>
            <span onClick={onRemoveCallback} className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Ya estás registrado ?</span>
        </div>
    </form>);
}

export default RegisterForm;