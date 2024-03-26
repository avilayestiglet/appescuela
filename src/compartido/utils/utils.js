const utils = {};

utils.translate = (value) => {
  switch (value) {
    case 'email should not be empty':
      return 'El correo electrónico no puede estar vacio';
    case 'email must be an email':
      return 'Ingresa un correo electrónico válido';
    case 'password must be longer than or equal to 8 characters':
      return 'La contraseña debe ser de 8 dígitos y solo números.';
    default:
      return value
  }
}

export default utils;