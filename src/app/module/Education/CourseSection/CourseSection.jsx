'use client';
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CourseCard from "./component/CourseCard";
import CourseCardModal from "./component/CourseCardModal";
import ScrollReveal from "../animation/ScrollReveal";
const CourseCardContainer = ({ courses }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="relative bg-[#040c14] text-white mx-4">

      <ScrollReveal>
        <span className="text-base sm:text-lg text-gray-200 text-center block mb-6">
          Certificaciones obtenidas tras completar los cursos
        </span>
      </ScrollReveal>


      {/* TARJETAS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10 relative">
        {courses.map((course, idx) => (
          <ScrollReveal key={idx} delay={0.1 * idx}>
            <CourseCard key={idx} course={course} onClick={setSelectedCourse} />
          </ScrollReveal>
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
