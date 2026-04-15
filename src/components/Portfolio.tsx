import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import pSolange from "@/assets/p-solange.jpg";
import pSamurai from "@/assets/p-samurai.jpg";
import pOwl from "@/assets/p-owl.jpg";
import pNeck from "@/assets/p-neck.jpg";
import pVegeta from "@/assets/p-vegeta.jpg";
import pZeus from "@/assets/p-zeus.jpg";

const works = [
  { src: pSolange, title: "Coruja Oriental", w: 800, h: 1024 },
  { src: pSamurai, title: "Lettering no Pescoço", w: 800, h: 1024 },
  { src: pOwl, title: "Samurai", w: 800, h: 1024 },
  { src: pNeck, title: "Vegeta Anime", w: 800, h: 1024 },
  { src: pVegeta, title: "Lettering no Peito", w: 800, h: 1024 },
  { src: pZeus, title: "Mitologia Zeus", w: 800, h: 1024 },
];

const Portfolio = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const ref = useScrollReveal();

  return (
    <section id="portfolio" className="py-24 sm:py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="scroll-reveal text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Portfólio</p>
          <h2 className="font-display text-5xl sm:text-7xl text-foreground">TRABALHOS</h2>
        </div>



        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {works.map((work, i) => (
            <div
              key={`${work.src}-${i}`}
              className="scroll-reveal group relative overflow-hidden cursor-pointer bg-card"
              style={{ animationDelay: `${i * 100}ms` }}
              onClick={() => setSelected(works.indexOf(work))}
            >
              <div className="overflow-hidden">
                <img
                  src={work.src}
                  alt={work.title}
                  loading="lazy"
                  width={work.w}
                  height={work.h}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500 flex items-center justify-center">
                <span className="text-foreground font-display text-2xl tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  {work.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-4xl bg-background/95 border-border p-2 sm:p-4">
          {selected !== null && (
            <div className="relative">
              <img
                src={works[selected].src}
                alt={works[selected].title}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <button
                  onClick={() => setSelected(selected > 0 ? selected - 1 : works.length - 1)}
                  className="px-4 py-2 bg-background/80 text-foreground border border-border text-sm"
                >
                  ← Anterior
                </button>
                <span className="font-display text-lg text-foreground">{works[selected].title}</span>
                <button
                  onClick={() => setSelected(selected < works.length - 1 ? selected + 1 : 0)}
                  className="px-4 py-2 bg-background/80 text-foreground border border-border text-sm"
                >
                  Próximo →
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
