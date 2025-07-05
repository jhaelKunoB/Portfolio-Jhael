"use client";
import React from "react";
import { Timeline } from "./componentes/timeline";
import {projects} from "./data/projectData";

const ProyectSeccion = () => {
   
    return (
        <section id='projects' className="relative w-full overflow-clip">
            <Timeline data={projects} />
        </section>
    );
}

export default ProyectSeccion;