import { useState } from 'react'

const faqs = [
  { q: 'Berapa lama pengerjaan?', a: 'Landing page basic: 2-3 hari. Pro: 5-7 hari. Custom tergantung kompleksitas, biasanya 1-3 minggu.' },
  { q: 'Bisa revisi berapa kali?', a: 'Basic: 3x. Pro dan Custom: unlimited sampai kamu puas.' },
  { q: 'Domain dan hosting siapin?', a: 'Paket Pro sudah termasuk domain + hosting 1 tahun. Basic belum.' },
  { q: 'Gimana cara bayar?', a: 'Transfer bank atau e-wallet. DP 50% di awal, sisanya setelah selesai.' },
  { q: 'Ada garansi?', a: 'Revisi gratis + support 30 hari setelah website online.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 md:py-36 bg-warm-50/60 dark:bg-warm-300/[0.02] border-y border-warm-200/30 dark:border-warm-300/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left header */}
          <div className="lg:col-span-4">
            <div className="reveal flex items-center gap-3 mb-5">
              <span className="w-8 h-[1px] bg-terracotta" />
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-terracotta">Tanya</span>
            </div>
            <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl tracking-tight leading-[1.05]">
              Yang Sering<br /><span className="italic">Ditanyain</span>
            </h2>
          </div>

          {/* Right: FAQ list */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-warm-200/30 dark:divide-warm-300/[0.06]">
              {faqs.map((f, i) => (
                <div key={i} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-start justify-between gap-6 py-6 text-left group">
                    <span className={`text-base transition-colors duration-200 ${open === i ? 'font-medium text-espresso dark:text-warm-100' : 'text-espresso-soft/70 dark:text-warm-300/70 group-hover:text-espresso dark:group-hover:text-warm-100'}`}>
                      {f.q}
                    </span>
                    <span className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      open === i
                        ? 'border-terracotta/30 bg-terracotta/5 rotate-45'
                        : 'border-warm-200 dark:border-warm-300/20'
                    }`}>
                      <svg className="w-3 h-3 text-espresso-soft/40 dark:text-warm-300/40" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M12 5v14M5 12h14"/></svg>
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open === i ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                    <p className="text-sm text-espresso-soft/50 dark:text-warm-300/50 leading-relaxed max-w-[48ch]">{f.a}</p>
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
