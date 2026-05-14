import { internalCases } from "../mock/portfolio";

export function InternalCasesSection() {
  return (
    <section
      id="entregas"
      className="border-y border-white/10 bg-[#171524] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
              Entregas profissionais
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
              Projetos internos com impacto real.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-zinc-400">
            Por atuar majoritariamente em projetos corporativos, meus
            principais trabalhos não possuem repositórios públicos. Abaixo estão
            algumas entregas que demonstram minha experiência prática.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {internalCases.map((project, index) => (
            <article
              key={project.title}
              className="group rounded-[2rem] border border-white/10 bg-zinc-950 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-cyan-300">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-white">
                    {project.title}
                  </h3>
                </div>

                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-cyan-400 font-black text-zinc-950">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="leading-8 text-zinc-400">{project.description}</p>

              <div className="mt-6">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
                  Responsabilidades
                </p>

                <ul className="space-y-3">
                  {project.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex gap-3 text-sm leading-6 text-zinc-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}