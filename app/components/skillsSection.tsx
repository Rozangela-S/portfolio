import { skills } from "../mock/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24 bg-[#100F1A]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            Tecnologias e competências
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Stack e conhecimentos aplicados no desenvolvimento de interfaces,
            integração com APIs e sustentação de sistemas.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center text-sm font-bold text-zinc-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}