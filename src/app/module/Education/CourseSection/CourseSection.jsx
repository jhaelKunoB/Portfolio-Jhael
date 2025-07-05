'use client';
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CourseCard from "./component/CourseCard";
import CourseCardModal from "./component/CourseCardModal";

const CourseCardContainer = ({ courses }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="relative bg-[#040c14] py-10 px-6 text-white max-w-6xl mx-auto">
      {/* TÍTULO */}
      <div className="mb-10 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-2">Cursos realizados</h3>
        <p className="text-gray-400 text-sm sm:text-base">
          Aquí puedes ver algunos de los cursos que completé durante mi formación.
        </p>
      </div>

      {/* TARJETAS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10 relative">
        {courses.map((course, idx) => (
          <CourseCard key={idx} course={course} onClick={setSelectedCourse} />
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCourse && (
          <CourseCardModal
            course={selectedCourse}
            onClose={() => setSelectedCourse(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CourseCardContainer;
