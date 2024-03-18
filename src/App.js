// App.jsx
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import LoaderComponent from './compartido/components/loader/loader.component';
import { useLoader } from './compartido/services/loader.provider';

const App = ({ router }) => {
  const { isLoading } = useLoader();
  return (
    <>
      {isLoading && <LoaderComponent />}
      <RouterProvider router={router} />
    </>
  );
};

export default App;