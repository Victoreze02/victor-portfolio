
export default function Navbar() {
  return (
     <header className="bg-white shadow p-4 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">My Portfolio</h1>
        <nav className="space-x-4">
          <a href="#skills" className="text-blue-600 hover:underline">Skills</a>
          <a href="#projects" className="text-blue-600 hover:underline">Projects</a>
          <a href="#contact" className="text-blue-600 hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}