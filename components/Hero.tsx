export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-cyan-400">
        IT Student • AI Enthusiast • Multi-Sport Athlete
      </p>

      <h1 className="mb-6 text-5xl font-bold md:text-7xl">
        Sumit Pawar
      </h1>

      <p className="max-w-2xl text-lg text-gray-400">
        Building intelligent applications with discipline,
        creativity, and the mindset of an athlete.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400">
          View Projects
        </button>

        <button className="rounded-full border border-white/20 px-6 py-3 transition hover:bg-white/10">
          Contact Me
        </button>
      </div>
    </section>
  );
}