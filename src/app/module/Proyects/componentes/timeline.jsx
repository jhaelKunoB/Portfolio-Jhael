"use client";

// Importaciones necesarias para el componente
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import TechIcons from "./IconTech/TechIcons";
import { AnimatedTooltip } from "../componentes/IconTech/components/animated-tooltip";
import Carousel from "./Carusel/Carousel";

// Componente Timeline que recibe datos de proyectos y los muestra en una línea de tiempo
export const Timeline = ({ data }) => {
    // Validación de datos de entrada
    if (!data || !Array.isArray(data)) {
        return <div>No hay proyectos para mostrar.</div>;
    }
    // Referencias DOM para controlar el scroll y la altura
    const ref = useRef(null);              // Referencia al contenedor principal
    const containerRef = useRef(null);     // Referencia al contenedor de scroll

    // Estado para almacenar la altura total del scroll
    const [scrollHeight, setScrollHeight] = useState(0);

    /**
     * Effect para calcular y actualizar la altura del scroll
     * Se ejecuta cuando cambian los datos o el tamaño del contenedor
     */
    useEffect(() => {
        // Función para actualizar la altura
        const updateHeight = () => {
            if (ref.current) {
                setScrollHeight(ref.current.scrollHeight);
            }
        };

        // Calcular altura inicial
        updateHeight();

        // Observer para detectar cambios de tamaño
        const observer = new ResizeObserver(updateHeight);
        if (ref.current) observer.observe(ref.current);

        // Cleanup del observer
        return () => observer.disconnect();
    }, [data]);

    // Hook de scroll para obtener el progreso de scroll
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end 60%"],  // Define cuándo empieza y termina la animación
    });

    // Transformaciones basadas en el progreso del scroll
    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, scrollHeight]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="relative w-full bg-[#040c14] font-sans md:px-10"
            ref={containerRef}>

            <div className="relative max-w-6xl mx-auto px-2 sm:px-1 text-center">
                <h2 className="flex items-center justify-center text-4xl font-bold text-white">
                    PROYECTOS
                </h2>
            </div>



            {/* Contenedor principal de la línea de tiempo */}
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {/* Mapeo de proyectos para generar items de la línea de tiempo */}
                {data.map((item, index) => (
                    <div key={index} className="flex justify-start pt-10 md:pt-10 md:gap-10">
                        {/* Indicador circular y título del proyecto (lado izquierdo) */}
                        <div
                            className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            {/* Círculo indicador en la línea de tiempo */}
                            <div
                                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                                <div
                                    className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                            </div>
                            {/* Título y período - visible solo en desktop */}
                            <div className="hidden md:block flex-col">
                                <h3
                                    className="text-xl md:pl-20 md:text-4xl font-bold text-sky-200 ">
                                    {item.title}
                                </h3>
                                <span className="text-xs md:pl-20 md:text-sm text-neutral-500">
                                    {item.period}
                                </span>
                            </div>
                        </div>

                        {/* Contenido del proyecto (lado derecho) */}
                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            {/* Título y período - visible solo en móvil */}
                            <div className="md:hidden flex-col mb-4">
                                <h3 className="block text-2xl  text-left font-bold text-sky-200">
                                    {item.title}
                                </h3>
                                <span className="text-xs md:text-sm text-white">
                                    {item.period}
                                </span>
                            </div>

                            {/* Descripción, tecnologías e imágenes del proyecto */}
                            <div>
                                {/* Descripción del proyecto */}
                                <p className="mb-8 text-xs font-normal md:text-sm text-neutral-200 text-justify ">
                                    {item.description}
                                </p>

                                {/* Componente para mostrar iconos de tecnologías */}
                                <div className="flex flex-row items-center justify-start mb-5 w-full">
                                    <AnimatedTooltip techs={item.technologies} />
                                </div>

                                {/* Carrusel de imágenes del proyecto */}
                                <div>
                                    <Carousel slides={item.images} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Línea vertical animada de la timeline */}
                <div
                    style={{
                        height: scrollHeight + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
                    {/* Línea de progreso animada que se llena conforme se hace scroll */}
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
                </div>
            </div>
        </div>
    );
};
