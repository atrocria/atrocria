import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-slate-100">
      <main className="grid min-h-screen w-full gap-6 p-0 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="space-y-8 rounded-none border-none bg-black p-6 shadow-none lg:rounded-r-[2rem] lg:border-r lg:border-white/10 lg:bg-black/90 lg:shadow-[0_30px_120px_-40px_rgba(0,0,0,0.85)]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-orange-300/80">Navigation</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">Home panel</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">Quick access to your portfolio and development logs.</p>
          </div>

          <nav className="space-y-4">
            <Link
              href="/"
              className="block rounded-2xl border border-orange-400/10 bg-orange-500/10 px-4 py-3 text-sm font-semibold text-orange-200 transition hover:border-orange-300/40 hover:bg-orange-500/15"
            >
              Home (Portfolio)
            </Link>

            <details className="rounded-3xl bg-black/90 p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800/80">
                Dev logs
                <span className="text-slate-400">▾</span>
              </summary>
              <div className="mt-3 space-y-2 pl-2">
                <Link
                  href="/dev-logs/house"
                  className="block rounded-xl px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800/80"
                >
                  House
                </Link>
                <Link
                  href="/dev-logs/unity"
                  className="block rounded-xl px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800/80"
                >
                  Unity Game
                </Link>
                <Link
                  href="/dev-logs/blender"
                  className="block rounded-xl px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800/80"
                >
                  Blender
                </Link>
              </div>
            </details>
          </nav>
        </aside>

        <section className="space-y-8 bg-black/95 p-6 lg:p-8">
          <div className="rounded-none border-none bg-black p-6 shadow-none lg:rounded-[2rem] lg:border lg:border-white/10 lg:shadow-[0_40px_120px_-40px_rgba(0,0,0,0.85)]">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-6">
                <span className="inline-flex rounded-full bg-orange-500/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.35em] text-orange-200">
                  Portfolio
                </span>
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  I build interactive experiences, game projects, and creative tools.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-slate-300">
                  Welcome to the portfolio homepage. Explore dev logs from House, Unity, and Blender work, then open the door to the Three.js project.
                </p>
              </div>

              <Link
                href="/threejs"
                className="group relative mx-auto block h-[320px] w-full max-w-sm overflow-hidden rounded-[2.5rem] text-center transition lg:mx-0"
              >
                <div className="absolute inset-0 rounded-[2.5rem] bg-black/95" />
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-orange-500/10 via-orange-400/15 to-orange-500/10 opacity-40 transition duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.12),transparent_30%)]" />
                <div className="absolute right-4 top-4 z-10 rounded-3xl border border-orange-500/20 bg-slate-950/90 px-4 py-3 text-right shadow-lg backdrop-blur-xl">
                  <p className="text-[9px] uppercase tracking-[0.4em] text-orange-300">Open me!</p>
                  <div className="mt-1 text-3xl text-orange-300">↰</div>
                </div>
                <div className="relative flex h-full flex-col items-center justify-center px-6 py-8">
                  <div className="relative h-[260px] w-48 overflow-hidden rounded-[2rem] border border-slate-700 bg-black/95 shadow-inner transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="absolute left-1/2 top-6 h-10 w-16 -translate-x-1/2 rounded-b-[1rem] bg-slate-700" />
                    <div className="absolute right-8 top-1/2 h-3 w-3 rounded-full bg-amber-300/90" />
                    <div className="absolute inset-x-0 bottom-8 mx-auto h-14 w-24 rounded-2xl bg-slate-700/80" />
                    <div className="absolute inset-x-0 bottom-5 mx-auto h-6 w-16 rounded-full bg-orange-400/15" />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05),rgba(255,255,255,0.01))]" />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-black/80 p-6">
              <h2 className="text-xl font-semibold text-white">House</h2>
              <p className="mt-3 text-slate-300">
                Track the build, upgrades, and creative systems for the house project.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-black/80 p-6">
              <h2 className="text-xl font-semibold text-white">Unity Game</h2>
              <p className="mt-3 text-slate-300">
                Share development notes, prototypes, and progress on your Unity experience.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-black/80 p-6">
              <h2 className="text-xl font-semibold text-white">Blender</h2>
              <p className="mt-3 text-slate-300">
                Log modeling, texturing, and scene work from Blender and 3D asset creation.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
