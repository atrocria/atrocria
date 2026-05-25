import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-16 sm:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-10 shadow-[0_20px_120px_-30px_rgba(15,23,42,0.8)] backdrop-blur-xl">
          <h1 className="text-4xl font-semibold tracking-tight text-white">Portfolio</h1>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Showcase your projects, highlight your skills, and explain what you build.
          </p>

          <div className="mt-10 space-y-6">
            <section className="rounded-3xl bg-slate-800/80 p-6">
              <h2 className="text-2xl font-semibold text-white">Featured Project</h2>
              <p className="mt-2 text-slate-300">Add your best work, case studies, and links to live demos or GitHub repositories here.</p>
            </section>

            <section className="rounded-3xl bg-slate-800/80 p-6">
              <h2 className="text-2xl font-semibold text-white">Skills</h2>
              <p className="mt-2 text-slate-300">List your technologies, frameworks, and tools in a clean, scannable format.</p>
            </section>
          </div>

          <Link
            href="/"
            className="mt-10 inline-flex rounded-full border border-slate-600 bg-slate-950/80 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-100"
          >
            Back home
          </Link>
        </div>
      </main>
    </div>
  );
}
