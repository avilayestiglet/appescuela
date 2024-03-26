const registerUser = {};

registerUser.name = {
  required: "Por favor, ingrese su nombre.",
  pattern: {
    value: /^[A-Z][a-z]{0,19}$/,
    message: "El nombre no es válido, debe poseer la primera letra mayuscula y sin espacios"
  },
  minLength: {
    value: 3,
    message: "El nombre debe tener al menos 3 caracteres"
  },
  maxLength: {
    value: 20,
    message: "El nombre no puede tener más de 20 caracteres"
  },
}

registerUser.lastname = {
  required: "Por favor, ingrese su apellido.",
  pattern: {
    value: /^[A-Z][a-z]{0,19}$/,
    message: "El apellido no es válido, debe poseer la primera letra mayuscula y sin espacios"
  },
  minLength: {
    value: 3,
    message: "El apellido debe tener al menos 3 caracteres"
  },
  maxLength: {
    value: 20,
    message: "El apellido no puede tener más de 20 caracteres"
  },
  
}

registerUser.email = {
  required: "Por favor, ingrese su correo electrónico.",
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "El correo electrónico no es válido"
  },
}

registerUser.password = {
  required: "Por favor, ingrese contraseña.",
}

export default registerUser;