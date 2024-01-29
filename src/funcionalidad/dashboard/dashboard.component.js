import React, { useState, useEffect } from "react";
import Siderbar from "../../compartido/components/sidebar/sidebar";
import listSidebar from "./config/list.sidebar";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../../compartido/components/header/header.component";
import dashboardApiService from "./services/dashboard.service";
import ModalErrorComponent from "../../compartido/components/modal/modal.error.component";

const DashboardComponent = () => {
    const [profile, setProfile] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState(null);

    const getProfile = () => {
        const subscription = dashboardApiService.getUser({}).subscribe({
            next: (data) => {
                if (data.status === 200 && data.data != null) {
                    setProfile(data.data);
                } else {
                    setError(data);
                    setShowModal(true);
                }
            },
            error: (err) => {
                setError({ error: "Error al obtener el perfil del usuario", details: err });
                setShowModal(true);
            }
        });

        return () => subscription.unsubscribe(); // Esto asegura la desuscripción
    };

    useEffect(() => {
        const unsubscribe = getProfile();
        return unsubscribe; // Limpia la suscripción cuando el componente se desmonta
    }, []);

    const handleModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <ModalErrorComponent
                title="Error al consultar el usuario"
                message={error?.error ?? "Error de conexión"}
                show={showModal}
                callback={handleModal}
            />
            <div className="flex h-screen overflow-hidden">
                <Siderbar list={listSidebar} profile={profile} />
                <main className="content w-[75%] relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <HeaderComponent />
                    <Outlet />
                </main>
            </div>
        </>
    );
}

export default DashboardComponent;