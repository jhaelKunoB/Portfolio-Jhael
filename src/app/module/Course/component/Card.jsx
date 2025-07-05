"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ExpandingCourseCard = ({ course, onClick }) => (
  <motion.div
    layoutId={course.title}
    onClick={() => onClick(course)}
    className="cursor-pointer rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-4 shadow-lg w-full text-white transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]"
  >
    <h2 className="text-lg font-semibold text-white">{course.title}</h2>
    <p className="text-sm text-gray-300">{course.institution}</p>
    <p className="text-sm text-gray-200 mt-2">{course.summary}</p>
  </motion.div>
);

const CourseCardExpanded = ({ course, onClose }) => (
  <motion.div
    layoutId={course.title}
    className="relative z-50 w-full max-w-md mx-auto my-8 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white shadow-xl flex flex-col overflow-hidden"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.5 }}
    transition={{ type: "spring", duration: 0.1 }}
  >
    {/* Botón cerrar */}
    <button
      onClick={onClose}
      className="absolute top-4 right-4 text-gray-300 hover:text-red-500"
    >
      <X size={20} />
    </button>

    {/* Imagen del certificado */}
    {course.certificateUrl && (
      <div className="w-full">
        <img
          src={
            "https://res.cloudinary.com/doacrpjgf/image/upload/v1751480138/CCNA-_Introduction_to_Networks_1_nvjbdx.jpg"
          }
          alt="Certificado"
          className="w-full max-h-[400px] object-contain rounded-t-xl"
        />
      </div>
    )}

    {/* Información */}
    <div className="w-full p-4">
      <h2 className="text-xl font-bold text-[#85C4D4]">{course.title}</h2>
      <p className="text-sm text-gray-300">{course.institution}</p>
      <p className="mt-2 text-sm text-gray-200">{course.summary}</p>

      {course.techs?.length > 0 && (
        <ul className="mt-3 list-disc list-inside text-sm text-gray-200 space-y-1">
          {course.techs.map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>
      )}
    </div>
  </motion.div>
);

const CourseCardContainer = ({ courses }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="relative bg-[#040c14] py-10 px-6">
      {/* Grid de tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10 relative">
        {courses.map((course, idx) => (
          <ExpandingCourseCard
            key={idx}
            course={course}
            onClick={setSelectedCourse}
          />
        ))}
      </div>

      {/* Overlay con tarjeta expandida */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Fondo oscuro y desenfoque */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
            />
            <CourseCardExpanded
              course={selectedCourse}
              onClose={() => setSelectedCourse(null)}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CourseCardContainer;
