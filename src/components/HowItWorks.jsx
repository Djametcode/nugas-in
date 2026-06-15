const steps = [
  { num: '01', title: 'Konsultasi', desc: 'Ceritakan kebutuhanmu. Gratis, tanpa komitmen.' },
  { num: '02', title: 'Pengerjaan', desc: 'Kami kerjakan sesuai brief. Update berkala, revisi unlimited.' },
  { num: '03', title: 'Serah Terima', desc: 'Website ready, source code lengkap, bonus setup domain & hosting.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 border-t border-zinc-200 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Cara Kerja</h2>
          <p className="text-zinc-600 dark:text-zinc-400">Prosesnya simpel, gak ribet.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="relative">
              <div className="text-6xl font-bold text-zinc-200 dark:text-zinc-800/50 mb-4">{s.num}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
