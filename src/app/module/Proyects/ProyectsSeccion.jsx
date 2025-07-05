"use client";
import React from "react";
import { Timeline } from "./componentes/timeline";
import {projects} from "./data/projectData";

const ProyectSeccion = () => {
   
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={projects} />
        </div>
    );
}

export default ProyectSeccion;