import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    navigate('login');
  });
  return (
    <div>
      <h4>Cerrando Sesión........</h4>
    </div>
  );
}
export default LogoutPage;