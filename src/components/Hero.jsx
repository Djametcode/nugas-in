export default function Hero() {
  return (
    <section className="min-h-[100dvh] flex items-center pt-16 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-500/10 border border-brand-200 dark:border-brand-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-medium text-brand-600 dark:text-brand-400">Menerima proyek baru</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            Bikin Website<br />
            <span className="text-brand-600 dark:text-brand-400">Impianmu</span> di Sini
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-[50ch] leading-relaxed mb-8">
            Jasa pembuatan website profesional untuk mahasiswa, UMKM, dan bisnis. Cepat, berkualitas, harga terjangkau.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://wa.me/6281234567890?text=Halo%20Nugas.in%2C%20saya%20mau%20bikin%20website" className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-medium px-6 py-3 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-600/25">
              Mulai Sekarang
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center gap-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white font-medium px-6 py-3 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98]">
              Lihat Harga
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Gratis konsultasi
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Revisi unlimited
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Deadline fleksibel
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
