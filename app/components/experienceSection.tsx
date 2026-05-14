import { experiences } from "../mock/portfolio";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="px-6 py-24 bg-[#100F1A]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
            Experiência 
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            Atuação profissional
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Experiência prática em sistemas corporativos, com foco em front-end,
            integração com back-end e entendimento de regras de negócio.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <article
              key={experience.role}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <p className="text-sm font-semibold text-cyan-300">
                    {experience.period}
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-white">
                    {experience.role}
                  </h3>

                  <p className="mt-1 text-zinc-500">{experience.company}</p>
                </div>

                <span className="w-fit rounded-full border border-cyan-400/30 px-4 py-2 text-sm font-semibold text-cyan-300">
                  Front-end
                </span>
              </div>

              <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
                {experience.description}
              </p>

              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {experience.activities.map((activity) => (
                  <li
                    key={activity}
                    className="rounded-2xl bg-zinc-950/60 p-4 text-sm text-zinc-300"
                  >
                    {activity}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}