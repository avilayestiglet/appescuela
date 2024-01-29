// index.js
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import router from './routes/router';
import { LoaderProvider } from './compartido/services/loader.provider';
import App from './App'; // Asegúrate de importar el componente App que acabas de crear

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoaderProvider>
      <App router={router} />
    </LoaderProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();