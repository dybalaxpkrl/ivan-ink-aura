import { useScrollReveal } from "@/hooks/useScrollReveal";
import ivanPortrait from "@/assets/ivan-portrait.jpg";

const About = () => {
  const ref = useScrollReveal();

  return (
    <section id="sobre" className="py-24 sm:py-32 px-6 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="scroll-reveal relative">
          <div className="relative overflow-hidden">
            <img
              src={ivanPortrait}
              alt="Ivan Tatto - Tatuador Profissional"
              loading="lazy"
              width={800}
              height={1024}
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="scroll-reveal text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Sobre o artista
          </p>
          <h2 className="scroll-reveal font-display text-5xl sm:text-6xl text-foreground mb-8">IVAN TATTO</h2>

          <div className="space-y-5 text-secondary-foreground/80 font-light leading-relaxed">
            <p className="scroll-reveal">
              Com mais de 10 anos dedicados à arte da tatuagem, Ivan se especializou em <strong className="text-foreground font-medium">blackwork, pontilhismo e preto e cinza</strong> — estilos que exigem precisão absoluta e visão artística refinada.
            </p>
            <p className="scroll-reveal">
              Cada trabalho é tratado como peça única. Não existe repetição. A filosofia é clara: <em className="text-foreground/90">sua pele merece arte original, não cópia.</em>
            </p>
            <p className="scroll-reveal">
              Reconhecido pela atenção obsessiva aos detalhes e pelo compromisso com a excelência técnica, Ivan transforma ideias em obras que permanecem para sempre.
            </p>
          </div>

          <div className="scroll-reveal mt-10 flex gap-10">
            {[
              { num: "10+", label: "Anos de experiência" },
              { num: "2000+", label: "Trabalhos realizados" },
              { num: "100%", label: "Arte autoral" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-foreground">{stat.num}</p>
                <p className="text-xs text-muted-foreground tracking-wide mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
