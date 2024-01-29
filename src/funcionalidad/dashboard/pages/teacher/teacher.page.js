import React, { useState, useMemo, useCallback } from "react";
import ModalErrorComponent from "../../../../compartido/components/modal/modal.error.component";
import dashboardApiService from "../../services/dashboard.service";
import HeaderComponentRoute from "../../components/header/header.component";
import TableComponent from "../../../../compartido/components/table/table.component";
import TeacherItem from "./teacher.item";
import  CreateForm  from "./teacher.create";
import TeacherFilters from "./teacher.filters";
import TeacherActions from "./teacher.actions";
import ModalCreateComponent from "../../components/modals/modal.create";
import getPDF from "../../../../compartido/utils/generate-pdf.utils";

// ... otros imports

const TeacherPage = () => {
  const listHeaders = ["Cédula", "Nombre", "Edad", "Correo", "Direccion", "Acciones"];
  
  // Estados para controlar la visualización de los modales y el manejo de errores
  const [showModal, setShowModal] = useState(false);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [error, setError] = useState(null);

  // Estado para el manejo del indicador de carga
  const [isLoading, setIsLoading] = useState(false);

  // Estado para almacenar los datos de los profesores y para descarga
  const [teachersBody, setTeachersBody] = useState([]);
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
    setTeachersBody([]);
    setPaginate({
      currentPage: null,
      totalPages: null,
    });
  }, []);

  // Función que se llama cuando se selecciona un item
  const itemSelected = useCallback((item, type) => {
  }, []);

  // Función para manejar el envío del formulario de filtros
  const onSubmit = useCallback((event, current = 1) => {
    event.preventDefault();
    setIsLoading(true);
    dashboardApiService.getTeachers({ limit: 10, current }).subscribe((data) => {
      setIsLoading(false);
      if (data.status === 200) {
        setTeachersBody(data?.data.map((item, i) => (
          <TeacherItem key={i} item={item} itemSelected={itemSelected} />
        )) ?? []);
        setDownloadData(data.data);
        setPaginate({
          currentPage: data.current,
          totalPages: data.pages
        });
      } else {
        setIsLoading(false);
        setError(error);
        setShowModal(true);
      }
    })
  }, [itemSelected, error]);

  // Funciones para manejar la paginación
  const onPageChangeCallback = useCallback((event, current) => {
    onSubmit(event, current);
  }, [onSubmit]);

  // Funciones para las acciones de los profesores (crear y descargar)

const actions = useCallback(({ action, data }) => {
  switch (action) {
    case "create":
      setShowModalCreate(true);
    break;
    case "download":
      download(data);
      break;
    default:
      // No hacer nada
      break;
  }
}, []);

// Función para descargar un PDF de una lista de profesores

const download = useCallback((data) => {
  if (data.length > 0) {
    generatePDF({
      name: "lista_de_profesores",
      columns: [
        { header: "Cédula", dataKey: "cedula" },
        { header: "Nombre", dataKey: "nombre" },
        { header: "Edad", dataKey: "edad" },
        { header: "Correo", dataKey: "email" },
        { header: "Dirección", dataKey: "direccion" },
      ],
      data,
    });
  }
}, []);

// Función para generar un PDF

const generatePDF = useCallback(({ name, columns, data }) => {
  getPDF({ name, columns, data });
}, []);

  // useMemo para los filtros y el pie de página, para evitar recálculos innecesarios
  const filters = useMemo(() => (
    <TeacherFilters onSubmit={onSubmit} clean={clean} isLoading={isLoading} />
  ), [onSubmit, clean, isLoading]);

  const footer = useMemo(() => (
    <TeacherActions callback={actions} data={downloadData}/>
  ), [actions, downloadData]);

  return (
    <div>
      <HeaderComponentRoute
        item={{
          title: "Profesor",
          name: "Profesor",
          parent: "Dashboard",
        }}
      />
      <ModalErrorComponent
        title="Error al consultar los profesores"
        message={error?.error ?? "Error de conexión"}
        show={showModal}
        callback={handleModal}
      />
      <ModalCreateComponent 
        show={showModalCreate}
        title="Crear profesor"
        children={<CreateForm />}
        callback={hiddenCreateModal}
      />
      <div className="p-5">
        <TableComponent
          config={{
            paginate: true,
          }}
          body={teachersBody}
          headers={listHeaders}
          filters={filters}
          actions={footer}
          paginate={paginate}
          onPageChange={onPageChangeCallback}
        />
      </div>
    </div>
  );
};

// Asegúrate de que todos tus componentes secundarios, como TeacherFilters, TeacherItem, TeacherActions, etc.,
// estén definidos y exportados correctamente desde sus respectivos archivos.

export default TeacherPage;