const services = [
  { icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', title: 'Landing Page', desc: 'Halaman tunggal yang eye-catching untuk produk, jasa, atau personal branding.' },
  { icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z', title: 'E-Commerce', desc: 'Toko online lengkap dengan checkout, pembayaran, dan manajemen produk.' },
  { icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', title: 'Company Profile', desc: 'Website profesional untuk perusahaan, portofolio, atau CV online.' },
  { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', title: 'Tugas Kuliah', desc: 'Bantuan pengerjaan tugas website, tugas akhir, atau proyek kuliah.' },
  { icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z', title: 'Dashboard & Admin', desc: 'Panel admin kustom untuk mengelola data, user, atau konten.' },
  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Fix & Redesign', desc: 'Perbaikan bug, redesign tampilan, atau optimasi performa website lama.' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-xl mb-14">
          <p className="reveal text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">Layanan</p>
          <h2 className="reveal text-3xl md:text-4xl font-bold tracking-tight mb-4">Yang Bisa Kami Bantu</h2>
          <p className="reveal reveal-delay-1 text-slate-500 dark:text-slate-400 leading-relaxed">Dari landing page simpel sampai e-commerce full-featured, semua bisa.</p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div key={s.title} className={`reveal reveal-delay-${Math.min(i % 3 + 1, 3)} group relative p-6 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/40 hover:border-[var(--color-brand-300)] dark:hover:border-[var(--color-brand-500)]/30 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300`}>
              <div className="w-11 h-11 rounded-xl bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-500)]/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-5 h-5 text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} /></svg>
              </div>
              <h3 className="text-base font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
