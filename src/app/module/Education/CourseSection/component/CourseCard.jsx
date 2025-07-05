'use client';
import { motion } from "framer-motion";

const CourseCard = ({ course, onClick }) => (
  <motion.div
    onClick={() => onClick(course)}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="cursor-pointer rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-4 shadow-lg w-full text-white hover:shadow-xl hover:bg-white/20 transition-all"
  >
    <h2 className="text-lg font-semibold text-white">{course.title}</h2>
    <p className="text-sm text-gray-300">{course.institution}</p>
    <p className="text-sm text-gray-200 mt-2">{course.summary}</p>
  </motion.div>
);

export default CourseCard;
