

const skills = ['React', 'TailwindCSS', 'JavaScript', 'HTML', 'CSS', 'Vite'];

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="text-2xl font-semibold mb-6 text-blue-600">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {skills.map(skill => (
          <li key={skill} className="bg-white p-4 shadow rounded text-center font-medium hover:bg-blue-50 transition">{skill}</li>
        ))}
      </ul>
    </section>
  );
}
