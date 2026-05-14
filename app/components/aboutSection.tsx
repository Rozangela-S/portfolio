import { professionalHighlights } from "../mock/portfolio";

export function AboutSection() {
  return (
    <section id="sobre" className="border-y border-white/10  px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
            Sobre mim
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            Front-end com vivência em produto real.
          </h2>
        </div>

        <div>
          <div className="space-y-5 text-lg leading-8 text-zinc-400">
            <p>
              Sou Engenheira de Software Front-end Júnior I e atuo no
              desenvolvimento de telas para sistemas de grande porte.
              Meu trabalho envolve criar interfaces responsivas, performáticas e
              alinhadas a regras de negócio.
            </p>

            <p>
              No dia a dia, trabalho em contato com fluxos de back-end,
              endpoints, rotas, suporte técnico e evolução de produtos ligados a
              meios de pagamento, logística, estoque e operações internas.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {professionalHighlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm font-medium text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}