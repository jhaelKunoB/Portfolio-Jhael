'use client';
import { motion } from "framer-motion";
import { X } from "lucide-react";

const CourseCardModal = ({ course, onClose }) => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 shadow-xl text-white"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-300 hover:text-red-500"
      >
        <X size={20} />
      </button>

      {course.certificateUrl && (
        <div className="mb-4">
          <img
            src={course.certificateUrl}
            alt="Certificado"
            className="w-full max-h-[400px] object-contain rounded-md"
          />
        </div>
      )}

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
    </motion.div>
  </motion.div>
);

export default CourseCardModal;
