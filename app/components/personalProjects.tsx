'use client'

import { ArrowSquareOutIcon, GithubLogoIcon } from "@phosphor-icons/react";
import { personalProjects } from "../mock/portfolio";

export function PersonalProjects() {
  return (
    <section id="projetos" className="bg-[#151321] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-6 md:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-bold text-cyan-400">
              Projetos pessoais
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Sistemas próprios com demo funcional.
            </h2>
          </div>

          <p className="text-sm leading-7 text-slate-400">
            Além das entregas profissionais, desenvolvi projetos pessoais para
            demonstrar domínio em interfaces, regras de negócio, fluxos
            administrativos e construção de sistemas completos com Next.js.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {personalProjects.map((project, index) => (
            <article
              key={project.title}
              className="rounded-3xl border border-white/10 bg-[#07080d] p-8 shadow-xl"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-cyan-400">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-sm font-bold text-slate-950">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="leading-7 text-slate-400">
                {project.description}
              </p>

              {/* <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div> */}

              <div className="mt-8">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
                  Funcionalidades
                </p>

                <ul className="space-y-3">
                  {project.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-slate-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Ver demo
                  <ArrowSquareOutIcon size={16} />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  Ver código
                  <GithubLogoIcon size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}