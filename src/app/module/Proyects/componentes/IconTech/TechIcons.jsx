

export default function TechIcons({ techs }) {
  return (
    <div className="flex items-center gap-4 mt-4">
      {techs.map((tech, i) => (
        <img
          key={i}
          src={tech.src}
          alt={tech.alt}
          title={tech.title}
          className="w-8 h-8"
        />
      ))}
    </div>
  );
}