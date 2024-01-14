import React from "react";
import Path from "./path";
import { Link } from "react-router-dom";

const Profile = ({ profile, callback }) => {
    
    return (
        <div className="flex items-center p-2 space-x-4">
            <div>
                <h2 className="text-lg font-semibold text-white">Leroy Jenkins</h2>
                <span className="flex items-center space-x-1">
                    <p rel="noopener noreferrer" href="#" className="text-xs hover:underline text-slate-300">(Administrador)</p>
                </span>
            </div>
        </div>
    );
}

export default Profile;