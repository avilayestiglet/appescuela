import React, { useState, useMemo, useCallback } from "react";
import ModalErrorComponent from "../../../../compartido/components/modal/modal.error.component";
import dashboardApiService from "../../services/dashboard.service";
import HeaderComponentRoute from "../../components/header/header.component";
import TableComponent from "../../../../compartido/components/table/table.component";
import BinnacleItem from "./binnacle.item";
import BinnacleFilters from "./binnacle.filters";
import BinnacleActions from "./binnacle.actions";
import ModalCreateComponent from "../../components/modals/modal.create";
import generatePDF from "../../../../compartido/utils/generate-pdf.utils";

// ... otros imports

const BinnaclePage = () => {
  const listHeaders = ["Actividad", "Fecha", "Correo"];
  
  // Estados para controlar la visualización de los modales y el manejo de errores
  const [showModal, setShowModal] = useState(false);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [error, setError] = useState(null);

  // Estado para el manejo del indicador de carga
  const [isLoading, setIsLoading] = useState(false);

  // Estado para almacenar los datos de los profesores y para descarga
  const [binnacleBody, setBinnacleBody] = useState([]);
  const [binnacleResults, setBinnacleResults] = useState([]);
  const [downloadData, setDownloadData] = useState([]);

  // Estado para controlar la paginación
  const [paginate, setPaginate] = useState({
    currentPage: null,
    totalPages: null,
  });

  // Funciones para mostrar y ocultar modales
  const handleModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const hiddenCreateModal = useCallback(() => {
    setShowModalCreate(false);
  }, []);

  // Función para limpiar los datos de los profesores
  const clean = useCallback(() => {
    setBinnacleBody([]);
    setBinnacleResults([]);
    setPaginate({
      currentPage: null,
      totalPages: null,
    });
  }, []);

  // Función que se llama cuando se selecciona un item
  const itemSelected = useCallback((item, type) => {
    console.log(item, type);
  }, []);

  // Función para manejar el envío del formulario de filtros
  const onSubmit = useCallback((event, current = 1) => {
    event.preventDefault();
    setIsLoading(true);
    dashboardApiService.getBinnacle({ limit: 10, page: current }).subscribe((data) => {
      setIsLoading(false);
      if (data.status === 200) {
        setBinnacleBody(data?.data.map((item, i) => (
          <BinnacleItem key={i} item={item} itemSelected={itemSelected} />
        )) ?? []);
        setBinnacleResults(data.data);
        setDownloadData(data.data);
        setPaginate({
          currentPage: data.current,
          totalPages: data.pages
        });
      } else {
        setIsLoading(false);
        setShowModal(true);
        setError(error);
      }
    })
  }, [itemSelected, setBinnacleBody, setBinnacleResults, setDownloadData, setPaginate]);

  // Funciones para manejar la paginación
  const onPageChangeCallback = useCallback((event, current) => {
    
    onSubmit(event, current);
  }, [onSubmit]);

  // Funciones para las acciones de los profesores (crear y descargar)
  const actions = useCallback((action) => {
    if(action === "create"){
      setShowModalCreate(true);
    } else if(action === "download"){
      download();
    }
  }, []);

  const download = useCallback(() => {
    console.log(downloadData);
    if (downloadData.length > 0) {
      generatePDF({
        name: 'lista_de_profesores', 
        columns: [
          { header: "Cédula", dataKey: "cedula"},
          { header: "Nombre", dataKey: "nombre"},
          { header: "Edad", dataKey: "edad"},
          { header: "Correo", dataKey: "email"},
          { header: "Direccion", dataKey: "direccion"},
        ],
        data: downloadData
      });
    }
  }, [downloadData]);

  // useMemo para los filtros y el pie de página, para evitar recálculos innecesarios
  const filters = useMemo(() => (
    <BinnacleFilters onSubmit={onSubmit} clean={clean} isLoading={isLoading} />
  ), [onSubmit, clean, isLoading]);

  const footer = useMemo(() => (
    <BinnacleActions callback={actions} />
  ), [actions]);

  return (
    <div>
      <HeaderComponentRoute
        item={{
          title: "Bitácora",
          name: "Bitácora",
          parent: "Dashboard",
        }}
      />
      <ModalErrorComponent
        title="Error al consultar los registros"
        message={error?.error ?? "Error de conexión"}
        show={showModal}
        callback={handleModal}
      />
      <ModalCreateComponent 
        show={showModalCreate}
        title="Crear profesor"
        children={<div>Contenido del modal para crear bitácora</div>}
        callback={hiddenCreateModal}
      />
      <div className="p-5">
        <TableComponent
          data={{
            headers: listHeaders,
            filters,
            paginate: true,
            body: binnacleBody,
            footer,
          }}
          paginate={paginate}
          onPageChange={onPageChangeCallback}
        />
      </div>
    </div>
  );
};

// Asegúrate de que todos tus componentes secundarios, como BinnacleFilters, BinnacleItem, BinnacleActions, etc.,
// estén definidos y exportados correctamente desde sus respectivos archivos.

export default BinnaclePage;