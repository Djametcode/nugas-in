const steps = [
  { num: '01', title: 'Ngobrol', desc: 'Ceritain kebutuhanmu lewat WhatsApp. Kami kasih saran dan estimasi.' },
  { num: '02', title: 'Kerjain', desc: 'Kami buatin desain dulu. Revisi sampai kamu oke.' },
  { num: '03', title: 'Online', desc: 'Website di-deploy, siap dipake. Plus panduan update.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-36 bg-warm-50/60 dark:bg-warm-300/[0.02] border-y border-warm-200/30 dark:border-warm-300/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left: header */}
          <div className="lg:col-span-4">
            <div className="reveal flex items-center gap-3 mb-5">
              <span className="w-8 h-[1px] bg-terracotta" />
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-terracotta">Proses</span>
            </div>
            <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl tracking-tight leading-[1.05] mb-5">
              Tiga Langkah,<br /><span className="italic">Selesai</span>
            </h2>
            <p className="reveal reveal-delay-2 text-sm text-espresso-soft/50 dark:text-warm-300/50 leading-relaxed max-w-[30ch]">
              Dari chat pertama sampai website online. Gak ribet.
            </p>
          </div>

          {/* Right: steps */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {steps.map((s, i) => (
                <div key={s.num} className="reveal group" style={{ transitionDelay: `${i * 120}ms` }}>
                  <div className="flex gap-6 md:gap-10 py-8 border-b border-warm-200/30 dark:border-warm-300/[0.06] last:border-0">
                    {/* Number */}
                    <span className="font-display text-4xl md:text-5xl text-warm-300/60 dark:text-warm-300/20 shrink-0 w-14 text-right group-hover:text-terracotta/40 transition-colors duration-500">
                      {s.num}
                    </span>

                    <div className="pt-1">
                      <h3 className="text-lg font-medium mb-2 text-espresso dark:text-warm-100 group-hover:text-terracotta transition-colors duration-300">{s.title}</h3>
                      <p className="text-sm text-espresso-soft/50 dark:text-warm-300/50 leading-relaxed max-w-[36ch]">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
