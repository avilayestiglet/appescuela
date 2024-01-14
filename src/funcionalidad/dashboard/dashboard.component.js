import React from "react";
import Siderbar from "../../compartido/components/sidebar/sidebar";
import listSidebar from "./config/list.sidebar";
import { Outlet } from "react-router-dom";

const DashboardComponent = () => {
    return (
        <div className="w-full flex flex-row">
            <Siderbar list={listSidebar}/>
            <main className="content w-3/4">
                <Outlet />
            </main>
        </div>
    );
}

export default DashboardComponent;