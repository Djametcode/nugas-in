const steps = [
  { num: '01', title: 'Konsultasi', desc: 'Ceritakan kebutuhanmu via WhatsApp. Kami akan kasih saran dan estimasi harga.' },
  { num: '02', title: 'Desain & Develop', desc: 'Kami buatkan desain, kamu review. Revisi sampai puas.' },
  { num: '03', title: 'Deploy & Selesai', desc: 'Website di-online-kan, siap dipakai. Termasuk panduan update.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-14">
          <p className="reveal text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">Cara Kerja</p>
          <h2 className="reveal text-3xl md:text-4xl font-bold tracking-tight mb-4">3 Langkah Mudah</h2>
          <p className="reveal reveal-delay-1 text-slate-500 dark:text-slate-400 leading-relaxed">Dari chat pertama sampai website online, prosesnya simpel.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.num} className={`reveal reveal-delay-${i + 1} relative p-6 rounded-2xl bg-[var(--color-surface)] dark:bg-[var(--color-surface-dark)] border border-slate-200/60 dark:border-slate-700/40`}>
              <span className="text-5xl font-bold text-slate-200 dark:text-slate-800 mb-4 block">{s.num}</span>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
