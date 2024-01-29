import React, { useCallback, useMemo, useState } from "react";
import InputCustom from "../../../../compartido/components/input/input";
import ButtonCustom from "../../../../compartido/components/button/button.component";
import dashboardApiService from "../../services/dashboard.service";
import ModalInfoComponent from "../../../../compartido/components/modal/modal.info.component";

const CreateForm = () => {

  const [profesor, setProfesor] = useState({
    cedula: "",
    nombre_completo: "",
    edad: "",
    email: "",
    password: "",
    direccion: "",
    id_tipo: "profesor"
  });
  const [isLoading, setIsLoading] = useState(false); 
  const [showModalSuccess, setShowModalSuccess] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setIsLoading(true);

    // Aquí puedes añadir la lógica para enviar los datos del profesor a una API o guardarlos en un estado global
    console.log("Profesor creado:", { ...profesor, cedula: 'V'+profesor.cedula});
    dashboardApiService.createTeacher({ ...profesor, cedula: 'V'+profesor.cedula})
    .subscribe(result => {
      setIsLoading(false);
      if(result.status === 200){
        setProfesor({
          cedula: "",
          nombre_completo: "",
          edad: "",
          email: "",
          password: "",
          direccion: "",
          id_tipo: "profesor"
        });
        setShowModalSuccess(true);
      }
    });
  }, [profesor, showModalSuccess, isLoading]);

  return (
    <form className="formulario flex flex-col" onSubmit={handleSubmit}>
      <ModalInfoComponent 
        show={showModalSuccess} 
        message="Profesor registrado con éxito!" 
        title="Registra Profesor" 
        callback={() => {setShowModalSuccess(false)}}
      />
      <div>
        <InputCustom
          icon="addresscard"
          id="cedula"
          label="Cédula"
          type="text"
          value={profesor.cedula}
          onChanged={useCallback((e) => setProfesor({ ...profesor, cedula: e.target.value.replace(/\D/g, '') }), [profesor])}
          placeholder="Ingrese la cédula"
          maxLength={9}
          required
        />
      </div>
      <div>
        <InputCustom
          id="nombre_completo"
          label="Nombre"
          type="text"
          value={profesor.nombre_completo}
          onChanged={useCallback((e) => setProfesor({ ...profesor, nombre_completo: e.target.value }), [profesor])}
          placeholder="Ingrese el nombre y apellido"
          maxLength={30}
          required
        />
      </div>
      <div>
        <InputCustom
          id="edad"
          label="Edad"
          type="text"
          value={profesor.edad}
          onChanged={useCallback((e) => setProfesor({ ...profesor, edad: e.target.value.replace(/\D/g, '') }), [profesor])}
          placeholder="Ingrese la edad"
          required
          minLength={2}
        />
      </div>
      <div>
        <InputCustom
          id="email"
          label="Correo"
          type="email"
          value={profesor.email}
          onChanged={useCallback((e) => setProfesor({ ...profesor, email: e.target.value }), [profesor])}
          placeholder="Ingrese el email electrónico"
          required
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
        />
      </div>
      <div>
        <InputCustom
          id="password"
          label="password"
          type="password"
          value={profesor.password}
          onChanged={useCallback((e) => setProfesor({ ...profesor, password: e.target.value }), [profesor])}
          placeholder="Ingrese la contraseña"
          required
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
        />
      </div>
      <div>
        <InputCustom
          id="direccion"
          label="Dirección"
          type="text"
          value={profesor.direccion}
          onChanged={useCallback((e) => setProfesor({ ...profesor, direccion: e.target.value }), [profesor])}
          placeholder="Ingrese la dirección"
          required
        />
      </div>
      <div>
        <ButtonCustom 
          type="submit" 
          children="Añadir profesor" 
          isLoading={isLoading}
          role="primary"
        />
      </div>
    </form>
  );
};

export default CreateForm;
