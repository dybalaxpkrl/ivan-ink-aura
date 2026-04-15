import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://wa.me/5513982146930";

const Contact = () => {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ nome: "", ideia: "", tamanho: "", local: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${form.nome}. Gostaria de fazer uma tatuagem:\n\nIdeia: ${form.ideia}\nTamanho: ${form.tamanho}\nLocal do corpo: ${form.local}`;
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contato" className="py-24 sm:py-32 px-6 bg-card" ref={ref}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Form */}
        <div>
          <div className="scroll-reveal">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Contato</p>
            <h2 className="font-display text-5xl text-foreground mb-8">FALE COMIGO</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { key: "nome", label: "Seu nome", placeholder: "Como posso te chamar?" },
              { key: "ideia", label: "Sua ideia", placeholder: "Descreva o que deseja tatuar" },
              { key: "tamanho", label: "Tamanho estimado", placeholder: "Ex: 15cm, braço inteiro..." },
              { key: "local", label: "Local do corpo", placeholder: "Onde será a tatuagem?" },
            ].map((field) => (
              <div key={field.key} className="scroll-reveal">
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  {field.label}
                </label>
                {field.key === "ideia" ? (
                  <textarea
                    placeholder={field.placeholder}
                    rows={3}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-text-dim focus:border-foreground/40 focus:outline-none transition-colors duration-300 resize-none"
                  />
                ) : (
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-text-dim focus:border-foreground/40 focus:outline-none transition-colors duration-300"
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="scroll-reveal w-full py-4 bg-foreground text-background font-medium text-sm tracking-widest uppercase hover:scale-[1.02] transition-transform duration-300"
            >
              Enviar via WhatsApp
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <div className="space-y-8">
            <div className="scroll-reveal">
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">WhatsApp</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-foreground font-display text-2xl hover:text-foreground/80 transition-colors">(13) 98214-6930</a>
            </div>
            <div className="scroll-reveal">
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Horário</p>
              <p className="text-secondary-foreground">Seg — Sáb: 10h às 20h</p>
              <p className="text-muted-foreground text-sm">Atendimento com hora marcada</p>
            </div>
            <div className="scroll-reveal">
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Localização</p>
              <p className="text-secondary-foreground">São Paulo, SP</p>
              <p className="text-muted-foreground text-sm">Endereço informado após agendamento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
