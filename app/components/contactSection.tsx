import { personalInfo } from "../mock/portfolio";


export function ContactSection() {
  return (
    <section
      id="contato"
      className="border-t border-white/10 bg-[#080712] px-6 py-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
          Contato
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
          Vamos conversar?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Estou disponível para conversar sobre oportunidades na área de
          front-end, desenvolvimento de interfaces e evolução de produtos web.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-zinc-950 transition hover:bg-cyan-300"
          >
            Enviar email
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300"
          >
            LinkedIn
          </a>

          <a
            href={personalInfo.resume}
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300"
          >
            Currículo
          </a>
        </div>
      </div>
    </section>
  );
}