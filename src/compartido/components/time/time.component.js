
// VenezuelaTime.jsx
import React, { useState, useEffect } from 'react';

const TimeComponent = () => {
  // Estado para almacenar la hora actual
  const [time, setTime] = useState(new Date());

  // Efecto para actualizar la hora cada segundo
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Limpieza del intervalo cuando el componente se desmonte
    return () => clearInterval(timerId);
  }, []);

  // Formatear la hora a la zona horaria de Venezuela (UTC-4)
  const venezuelaTime = time.toLocaleTimeString('es-VE', {
    timeZone: 'America/Caracas',
  });

  return (
        <div className="text-1xl font-bold text-white mt-0.5">
          {venezuelaTime}
        </div>
  );
};

export default TimeComponent;