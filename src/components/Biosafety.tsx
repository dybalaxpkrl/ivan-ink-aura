import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ShieldCheck, Droplets, Sparkles } from "lucide-react";

const items = [
  {
    icon: Droplets,
    title: "Materiais Descartáveis",
    desc: "Agulhas, luvas e materiais de uso único abertos na sua frente. Zero reutilização.",
  },
  {
    icon: ShieldCheck,
    title: "Ambiente Esterilizado",
    desc: "Estúdio higienizado com protocolos rigorosos de limpeza antes e após cada sessão.",
  },
  {
    icon: Sparkles,
    title: "Equipamentos Profissionais",
    desc: "Máquinas e tintas de alta qualidade, certificadas e reconhecidas internacionalmente.",
  },
];

const Biosafety = () => {
  const ref = useScrollReveal();

  return (
    <section id="biosseguranca" className="py-24 sm:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="scroll-reveal text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Segurança</p>
          <h2 className="font-display text-5xl sm:text-7xl text-foreground">BIOSSEGURANÇA</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="scroll-reveal group p-8 border border-border hover:border-foreground/20 transition-all duration-500 bg-card"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <item.icon className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors duration-500 mb-6" />
              <h3 className="font-display text-xl text-foreground mb-3 tracking-wider">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Biosafety;
