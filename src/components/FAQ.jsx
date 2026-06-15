import { useState } from 'react'

const faqs = [
  { q: 'Berapa lama pengerjaan?', a: 'Landing page basic: 2-3 hari. Pro: 5-7 hari. Custom: sesuai kompleksitas, biasanya 1-3 minggu.' },
  { q: 'Bisa revisi berapa kali?', a: 'Paket Basic: 3x revisi. Paket Pro & Custom: unlimited revisi sampai kamu puas.' },
  { q: 'Domain & hosting disediakan?', a: 'Paket Pro sudah termasuk domain + hosting 1 tahun. Paket Basic belum termasuk.' },
  { q: 'Gimana cara bayarnya?', a: 'Transfer bank / e-wallet. DP 50% di awal, sisanya setelah website selesai.' },
  { q: 'Ada garansi?', a: 'Ya! Garansi revisi gratis + support 30 hari setelah website online.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 md:py-32 bg-white dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-14">
          <p className="reveal text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">FAQ</p>
          <h2 className="reveal text-3xl md:text-4xl font-bold tracking-tight mb-4">Pertanyaan Umum</h2>
        </div>

        <div className="max-w-2xl space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 3)} rounded-2xl border border-slate-200/80 dark:border-slate-700/40 overflow-hidden transition-colors ${open === i ? 'bg-[var(--color-surface)] dark:bg-[var(--color-surface-dark)]' : 'bg-white dark:bg-slate-800/40'}`}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left">
                <span className="text-sm font-medium pr-4">{f.q}</span>
                <svg className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40' : 'max-h-0'}`}>
                <p className="px-6 pb-5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
