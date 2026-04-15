import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageCircle, Image, DollarSign, Calendar, Pen } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Contato", desc: "Envie sua ideia pelo WhatsApp" },
  { icon: Image, title: "Referências", desc: "Compartilhe inspirações e detalhes" },
  { icon: DollarSign, title: "Orçamento", desc: "Receba um orçamento personalizado" },
  { icon: Calendar, title: "Agendamento", desc: "Escolha a data ideal para você" },
  { icon: Pen, title: "Sessão", desc: "Arte sendo criada na sua pele" },
];

const Process = () => {
  const ref = useScrollReveal();

  return (
    <section id="processo" className="py-24 sm:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="scroll-reveal text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Como funciona</p>
          <h2 className="font-display text-5xl sm:text-7xl text-foreground">O PROCESSO</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="scroll-reveal group text-center relative"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative mb-6 mx-auto w-16 h-16 flex items-center justify-center border border-border group-hover:border-foreground/40 transition-all duration-500">
                <step.icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors duration-500" />
              </div>
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[1px] bg-border" />
              )}
              <p className="font-display text-xl text-foreground mb-1">{step.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
