
export function ProjectsSection() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
            Portfólio
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
            Projetos selecionados
          </h2>
        </div>

        <p className="max-w-md text-slate-600">
          Projetos desenvolvidos para praticar interfaces, organização de código, responsividade e publicação.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10"
          >
            <div className="mb-6 h-40 rounded-[1.5rem] bg-gradient-to-br from-slate-900 via-slate-700 to-slate-300" />

            <p className="text-sm font-bold text-slate-500">{project.type}</p>

            <h3 className="mt-2 text-2xl font-black text-slate-950">
              {project.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}