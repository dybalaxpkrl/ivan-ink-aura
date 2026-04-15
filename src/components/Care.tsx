import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const careItems = [
  {
    category: "Antes da tatuagem",
    items: [
      "Durma bem na noite anterior",
      "Alimente-se adequadamente antes da sessão",
      "Evite álcool e aspirina 24h antes",
      "Hidrate bem a pele nos dias anteriores",
      "Use roupas confortáveis e adequadas à região",
    ],
  },
  {
    category: "Pós-tatuagem",
    items: [
      "Mantenha o filme protetor pelo tempo indicado",
      "Lave com sabonete neutro e água morna",
      "Aplique pomada cicatrizante conforme orientação",
      "Evite sol direto por pelo menos 30 dias",
      "Não coce nem puxe as casquinhas",
    ],
  },
  {
    category: "Cicatrização",
    items: [
      "O processo completo leva de 15 a 30 dias",
      "É normal ocorrer descamação leve",
      "Mantenha a região hidratada",
      "Evite piscina, mar e banhos prolongados",
      "Em caso de reação, entre em contato imediatamente",
    ],
  },
];

const Care = () => {
  const ref = useScrollReveal();

  return (
    <section id="cuidados" className="py-24 sm:py-32 px-6 bg-card" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div className="scroll-reveal text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Orientações</p>
          <h2 className="font-display text-5xl sm:text-7xl text-foreground">CUIDADOS</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {careItems.map((item, i) => (
            <AccordionItem
              key={item.category}
              value={`item-${i}`}
              className="scroll-reveal border border-border bg-background/50 px-6"
            >
              <AccordionTrigger className="font-display text-xl tracking-wider text-foreground hover:no-underline py-5">
                {item.category}
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <ul className="space-y-3">
                  {item.items.map((text) => (
                    <li key={text} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-foreground/40 mt-2 shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Care;
