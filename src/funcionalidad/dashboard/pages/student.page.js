import React, { useState } from "react";
import TableComponent from "../../../compartido/components/table/table.component";
import InputCustom from "../../../compartido/components/input/input";
import ButtonCustom from "../../../compartido/components/button/button.component";
import ActionButton from "../../../compartido/components/button/action.button.component";
import ModalErrorComponent from "../../../compartido/components/modal/modal.error.component";
import dashboardApiService from "../services/dashboard.service";

const StudentPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const clean = () => {
        setStudents({
          ...students,
          body: [],
        });
      };
      const FormattedBody = ({ item, i }) => {
        return (
          <tr key={i} className="border-b border-strokedark border-[#eee]">
            <td className=" border-[#eee] py-5 px-4 pl-9 border-strokedark xl:pl-11">
              <h5 className="font-medium text-black">{item.nombre}</h5>
            </td>
            <td className=" border-[#eee] py-5 px-4 pl-9 border-strokedark xl:pl-11">
              <h5 className="font-medium text-black">{item.matricula}</h5>
            </td>
          </tr>
        );
      };
      
    
      const Filters = () => {
        return (
          <div className="w-full border-b border-strokedark border-[#eee] flex flex-wrap justify-end">
            
            <form onSubmit={onSubmit} className="w-1/2 flex flex-row">
              <div className="w-1/2 p-2">
                <ButtonCustom
                  role="clean"
                  type="button"
                  children="Limpiar"
                  callback={clean}
                />
              </div>
              <div className="w-1/2 p-2">
                <ButtonCustom
                  role="primary"
                  type="submit"
                  children="Buscar"
                  isLoading={isLoading}
                />
              </div>
            </form>
          </div>
        );
      };
      const handleModal = () => {
        setShowModal(false);
      };
    
      const FooterActions = () => {
        return (
          <div>
            <ActionButton
              role="primary"
              type="button"
              children={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  enableBackground="new 0 0 20 20"
                  className="w-6 h-6 inline-block"
                >
                  <path
                    fill="#FFFFFF"
                    d="M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"
                  ></path>
                </svg>
              }
            />
          </div>
        );
      };
      const [students, setStudents] = useState({
        headers: ["Nombre", "Matricula"],
        filters: Filters,
        body: [],
        footer: FooterActions,
      });
      const onSubmit = (event) => {
        setIsLoading(true);
        event.preventDefault();
        const response = dashboardApiService.getStudents();
        response.subscribe((data) => {
          setIsLoading(false);
          if (data.status == 200) {
            if (data.data != null) {
              setStudents({
                ...students,
                body:
                  data.data.map((item, i) => <FormattedBody item={item} i={i} />) ??
                  [],
              });
            }
          } else {
            setShowModal(true);
            setError(data);
          }
        });
      };
    
      return (
        <div className="p-5">
          <ModalErrorComponent
            title="Error al consultar los alumnos"
            message={error?.error ?? "Error de conexión"}
            show={showModal}
            callback={handleModal}
          />
          <TableComponent data={students} />
        </div>
      );
 };

 export default StudentPage;