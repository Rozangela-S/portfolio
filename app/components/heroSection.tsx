import { personalInfo } from "../mock/portfolio";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#171524] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-40"
    >
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute right-0 top-40 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl sm:h-72 sm:w-72" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="w-full min-w-0 max-w-3xl">
          <p className="mb-4 max-w-full text-[11px] font-semibold uppercase leading-5 tracking-[0.22em] text-cyan-300 sm:mb-5 sm:text-sm sm:tracking-[0.35em]">
            {personalInfo.role}
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl sm:leading-[1.05] md:text-6xl lg:text-7xl lg:leading-[0.95]">
            Desenvolvimento front-end para sistemas reais, complexos e
            escaláveis.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            Atuo na construção de interfaces performáticas e responsivas para
            sistemas internos de grande porte, com experiência em fluxos de
            pagamento, e-commerce, estoque, logística e integração com back-end.
          </p>

         <div className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:items-start lg:justify-start">
          <a
            href="#entregas"
            className="inline-flex w-full max-w-[320px] justify-center rounded-full bg-cyan-400 px-5 py-3 text-center text-sm font-bold text-zinc-950 transition hover:bg-cyan-300 sm:w-auto sm:px-6"
          >
            Ver entregas profissionais
          </a>

          <a
            href="#contato"
            className="inline-flex w-full max-w-[320px] justify-center rounded-full border border-white/15 px-5 py-3 text-center text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-300 sm:w-auto sm:px-6"
          >
            Entrar em contato
          </a>
        </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold text-zinc-500 sm:mt-10">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-300"
            >
              LinkedIn
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-300"
            >
              GitHub
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="transition hover:text-cyan-300"
            >
              Email
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[340px] flex-col items-center justify-center sm:max-w-xl lg:max-w-none">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-3 shadow-2xl shadow-cyan-950/30 sm:rounded-[2rem] sm:p-5">
            <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-zinc-900 p-4 sm:rounded-[1.5rem] sm:p-6">
              <div className="mb-6 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="overflow-x-auto">
                <div className="min-w-max space-y-3 font-mono text-xs text-zinc-300 sm:space-y-4 sm:text-sm">
                  <p>
                    <span className="text-cyan-300">const</span> profile = {"{"}
                  </p>

                  <p className="pl-5">
                    role:{" "}
                    <span className="text-emerald-300">
                      "Front-end Junior I"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    focus:{" "}
                    <span className="text-emerald-300">
                      "interfaces responsivas"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    context:{" "}
                    <span className="text-emerald-300">
                      "sistemas internos"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    stack:{" "}
                    <span className="text-emerald-300">
                      ["React", "Next.js", "Tailwind"]
                    </span>
                  </p>

                  <p>{"}"}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 w-fit rounded-2xl border border-white/10 bg-zinc-900 p-5 shadow-xl sm:absolute sm:-bottom-6 sm:-left-6 sm:mt-0">
            <p className="text-3xl font-black text-cyan-300">+4</p>
            <p className="mt-1 text-sm text-zinc-400">sistemas internos</p>
          </div>
        </div>
      </div>
    </section>
  );
}