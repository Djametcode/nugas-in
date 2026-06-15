export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-16 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-50)] via-[var(--color-surface)] to-[var(--color-surface)] dark:from-slate-900 dark:via-[var(--color-surface-dark)] dark:to-[var(--color-surface-dark)]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-brand-200)]/20 dark:bg-[var(--color-brand-500)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="reveal inline-flex items-center gap-2.5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700/60 rounded-full px-4 py-2 mb-8 shadow-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Menerima proyek baru</span>
          </div>

          {/* Headline */}
          <h1 className="reveal text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight leading-[1.08] mb-6">
            Bikin Website{' '}
            <span className="text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]">Impianmu</span>{' '}
            di Sini
          </h1>

          {/* Subheadline */}
          <p className="reveal reveal-delay-1 text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-[52ch] leading-relaxed mb-10">
            Jasa pembuatan website profesional untuk mahasiswa, UMKM, dan bisnis. Cepat, berkualitas, harga terjangkau.
          </p>

          {/* CTAs */}
          <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-3">
            <a href="https://wa.me/6281234567890?text=Halo%20Nugas.in%2C%20saya%20mau%20bikin%20website" className="inline-flex items-center justify-center gap-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium px-7 py-3.5 rounded-xl hover:opacity-90 transition-all active:scale-[0.97] shadow-lg shadow-slate-900/20 dark:shadow-white/10">
              Mulai Sekarang
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium px-7 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 transition-all active:scale-[0.97]">
              Lihat Harga
            </a>
          </div>

          {/* Trust signals */}
          <div className="reveal reveal-delay-3 mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-400 dark:text-slate-500">
            {['Gratis konsultasi', 'Revisi unlimited', 'Deadline fleksibel'].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
