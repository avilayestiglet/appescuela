import React from "react";

// Definir un objeto que mapea los tipos de íconos a su correspondiente SVG path
const icons = {
  email: {
    path: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207",
    viewBox: "0 0 24 24"
  },
  password: {
    path: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
    viewBox: "0 0 20 20"
  },
  username: {
    path: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4",
    viewBox: "0 0 24 24"
  },
  name: {
    path: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4",
    viewBox: "0 0 24 24"
  },
  people: {
    path: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
    viewBox: "0 0 20 20"
  }
};

const InputCustom = ({
    id = '',
    type = 'text',
    icon = 'email', // 'email' es el valor por defecto.
    name = '',
    maxLength = 50,
    placeholder = '',
    onChanged,
    isError = false,
    disabled = false,
    error = 'Error de ejecución',
    value = ''
}) => {
    // Seleccionar el SVG path basado en el tipo de ícono requerido.
    const iconSVG = icons[icon] || icons['email']; // Fallback a 'email' si el ícono no es reconocido.

    const borderColorClass = isError ? 'border-red-500' : 'border-slate-300';
    const iconColorClass = isError ? 'text-red-500' : 'text-slate-800';
    const errorMessage = isError ? <span className="text-sm text-red-500">{error}</span> : null;

    return (
        <div className="mb-4">
            <div className={`flex items-center ${borderColorClass}  rounded-2xl py-2 px-3 border-2 bg-slate-50`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${iconColorClass}`} fill="none"
                    viewBox={iconSVG.viewBox} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d={iconSVG.path} />
                </svg>
                <input value={value} className={`pl-2 outline-none border-none w-full ${isError ? " placeholder:text-red-500 text-red-500" : "text-slate-800"} bg-transparent `} type={type} name={name} id={id} placeholder={placeholder} onChange={onChanged}  maxLength={maxLength} disabled={disabled}/>
            </div>
            {errorMessage}
        </div>
    );    
}

export default InputCustom;