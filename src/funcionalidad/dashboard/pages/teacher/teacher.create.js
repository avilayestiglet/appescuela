import React, { useState } from "react";
import InputCustom from "../../../../compartido/components/input/input";

const CreateForm = () => {
  const [profesor, setProfesor] = useState({
    cedula: "",
    nombre: "",
    edad: "",
    correo: "",
    direccion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setProfesor({
      ...profesor,
      cedula: e.target.cedula.value,
      nombre: e.target.nombre.value,
      edad: e.target.edad.value,
      correo: e.target.correo.value,
      direccion: e.target.direccion.value,
    });

    // Aquí puedes añadir la lógica para enviar los datos del profesor a una API o guardarlos en un estado global
    console.log("Profesor creado:", profesor);
  };

  return (
    <form className="formulario flex flex-col" onSubmit={handleSubmit}>
      <div>
        <InputCustom
          id="cedula"
          label="Cédula"
          type="text"
          value={profesor.cedula}
          onChange={(e) => setProfesor({ ...profesor, cedula: e.target.value })}
          placeholder="Ingrese la cédula"
          required
        />
      </div>
      <div>
        <InputCustom
          id="nombre"
          label="Nombre"
          type="text"
          value={profesor.nombre}
          onChange={(e) => setProfesor({ ...profesor, nombre: e.target.value })}
          placeholder="Ingrese el nombre"
          required
        />
      </div>
      <div>
        <InputCustom
          id="edad"
          label="Edad"
          type="number"
          value={profesor.edad}
          onChange={(e) => setProfesor({ ...profesor, edad: e.target.value })}
          placeholder="Ingrese la edad"
          required
          minLength={18}
        />
      </div>
      <div>
        <InputCustom
          id="correo"
          label="Correo"
          type="email"
          value={profesor.correo}
          onChange={(e) => setProfesor({ ...profesor, correo: e.target.value })}
          placeholder="Ingrese el correo electrónico"
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
          onChange={(e) => setProfesor({ ...profesor, direccion: e.target.value })}
          placeholder="Ingrese la dirección"
          required
        />
      </div>
      <div>
        <button type="submit">Añadir profesor</button>
      </div>
    </form>
  );
};

export default CreateForm;
