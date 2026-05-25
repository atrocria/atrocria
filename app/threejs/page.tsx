import Link from "next/link";

export default function ThreeJSPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-16 sm:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-10 shadow-[0_20px_120px_-30px_rgba(15,23,42,0.8)] backdrop-blur-xl">
          <h1 className="text-4xl font-semibold tracking-tight text-white">Three.js Project</h1>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            A future interactive 3D experience built with Three.js and WebGL.
          </p>

          <div className="mt-10 space-y-6">
            <section className="rounded-3xl bg-slate-800/80 p-6">
              <h2 className="text-2xl font-semibold text-white">3D Experiments</h2>
              <p className="mt-2 text-slate-300">Use this page as the home for your next WebGL canvas, visualizations, and immersive demos.</p>
            </section>

            <section className="rounded-3xl bg-slate-800/80 p-6">
              <h2 className="text-2xl font-semibold text-white">Starter Setup</h2>
              <p className="mt-2 text-slate-300">Later you can integrate Three.js with a custom canvas and animations here.</p>
            </section>
          </div>

          <Link
            href="/"
            className="mt-10 inline-flex rounded-full border border-slate-600 bg-slate-950/80 px-6 py-3 text-sm font-semibold text-emerald-300 transition hover:border-emerald-300 hover:text-emerald-100"
          >
            Back home
          </Link>
        </div>
      </main>
    </div>
  );
}
