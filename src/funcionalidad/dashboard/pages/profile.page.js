import React from "react";

const ProfilePage = () => {
    return (
        <div>
          <h1>Editar perfil</h1>
    
          <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name"  />
          </div>
    
          <div>
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email"  />
          </div>
    
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password"  />
          </div>
    
          <div>
            <label htmlFor="role">Rol:</label>
            <input type="text" id="role" />
          </div>
    
          <div>
            <label htmlFor="bio">Biografía:</label>
            <textarea id="bio" />
          </div>
    
          <div>
            <label htmlFor="interests">Intereses:</label>
            <input type="text" id="interests" />
          </div>
        </div>
      );
    };

 export default ProfilePage;