import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputCustom from "../../../compartido/components/input/input";
import loginApiService from "../services/login.service";
import ButtonCustom from "../../../compartido/components/button/button.component";
import ModalErrorComponent from "../../../compartido/components/modal/modal.error.component";
import { useForm } from "react-hook-form";

const LoginForm = ({ callback, isRemove = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (form) => {
    setIsLoading(true);

    loginApiService.login(form).subscribe({
      next: (data) => {
        if (data.token) {
          localStorage.setItem("user", JSON.stringify(data));
          navigate("/dashboard");
        } else {
          setShowModal(true);
          setError(data);
        }
        setIsLoading(false);
      },
      error: (error) => {
        setShowModal(true);
        setError(error);
        setIsLoading(false);
      },
    }) 
  };

  const onRemoveCallback = () => {
    callback("register");
  };

  const hiddenModal = () => {
    setShowModal(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`w-1/2 ${isRemove ? "remove" : ""}`}
    >
      <ModalErrorComponent
        show={showModal}
        title="Error al iniciar sesión"
        message={error?.message ?? "Error al conectar con el servidor"}
        callback={hiddenModal}
      />
      <h1 className="text-gray-800 font-bold text-4xl mb-1">
        <center>¡Hola!</center>
      </h1>
      <p className="text-md font-normal mb-7">Bienvenido al portal</p>
      <InputCustom
        id="email"
        name="email"
        register={register("email", {
          required: "Por favor, ingrese su correo electrónico.",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "El correo electrónico no es válido"
          }
        })}
        isError={!!errors.email}
        error={errors.email?.message}
        icon="email"
        placeholder="Correo electrónico"
        type="email"
        disabled={isLoading}
      />
      <InputCustom
        id="password"
        name="password"
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
        <ButtonCustom
          children="Iniciar Sesión"
          isLoading={isLoading}
          role="primary"
          type="submit"
        />
        <span
          onClick={onRemoveCallback}
          className="text-sm ml-2 hover:text-yellow-400 cursor-pointer"
        >
          ¿No te has registrado aún? Regístrate aquí
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
