

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-12">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Hi, My Name is <span className="text-blue-800">Ezemokwe Victor</span><br /> I'm a Frontend Developer</h2>
        <p className="text-gray-600 text-lg">I build modern and responsive web applications using React and TailwindCSS.</p>
      </div>
      <div>
        <img
          src="./src/image/Victor.image.png"
          alt="Profile-Image"
          className="rounded-full shadow-lg w-48 h-48 object-cover"
        />
      </div>
    </section>
  );
}