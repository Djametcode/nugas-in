export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-end pb-20 md:pb-28 pt-32 overflow-hidden">
      {/* Warm ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-50 via-cream to-cream dark:from-cream-dark dark:via-cream-dark dark:to-cream-dark" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-terracotta/[0.06] dark:bg-terracotta/[0.03] rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sage/[0.05] dark:bg-sage/[0.02] rounded-full blur-[80px]" />

      <div className="relative w-full max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Left: massive headline */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="reveal flex items-center gap-3 mb-8">
              <span className="w-8 h-[1px] bg-terracotta" />
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-terracotta">Jasa Website</span>
            </div>

            {/* Headline - serif, massive, editorial */}
            <h1 className="reveal reveal-delay-1 font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.95] tracking-tight mb-8">
              Websitemu,{' '}
              <br className="hidden sm:block" />
              <span className="italic">Caramu</span>
              <span className="text-terracotta">.</span>
            </h1>

            {/* Sub - conversational, not corporate */}
            <p className="reveal reveal-delay-2 text-base md:text-lg text-espresso-soft/60 dark:text-warm-300/60 max-w-[40ch] leading-relaxed mb-10">
              Bikin website gak harus ribet. Ceritain mau yang kayak gimana, kami yang kerjain.
            </p>

            {/* CTAs */}
            <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-start gap-4">
              <a href="https://wa.me/6281234567890?text=Halo%20Nugas.in%2C%20saya%20mau%20bikin%20website"
                className="group inline-flex items-center gap-3 bg-espresso dark:bg-warm-100 text-cream dark:text-espresso font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition-all active:scale-[0.97]"
              >
                Mulai Ngobrol
                <span className="w-7 h-7 rounded-full bg-cream/20 dark:bg-espresso/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </span>
              </a>
              <a href="#pricing" className="inline-flex items-center gap-2 text-sm text-espresso-soft/60 dark:text-warm-300/60 hover:text-espresso dark:hover:text-warm-100 transition-colors py-3.5">
                Lihat harga
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </a>
            </div>
          </div>

          {/* Right: floating proof card */}
          <div className="reveal reveal-delay-4 lg:col-span-5">
            <div className="relative bg-white/60 dark:bg-warm-300/[0.04] backdrop-blur-sm border border-warm-200/50 dark:border-warm-300/10 rounded-3xl p-8 md:p-10">
              {/* Stats */}
              <div className="space-y-8">
                <div>
                  <div className="font-display text-5xl md:text-6xl text-espresso dark:text-warm-100 mb-1">50<span className="text-terracotta">+</span></div>
                  <div className="text-sm text-espresso-soft/50 dark:text-warm-300/50">website udah dibikin</div>
                </div>
                <div className="w-full h-[1px] bg-warm-200/40 dark:bg-warm-300/10" />
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-2xl font-medium text-espresso dark:text-warm-100">2-3</div>
                    <div className="text-xs text-espresso-soft/50 dark:text-warm-300/50 mt-0.5">hari rata-rata</div>
                  </div>
                  <div>
                    <div className="text-2xl font-medium text-espresso dark:text-warm-100">500K</div>
                    <div className="text-xs text-espresso-soft/50 dark:text-warm-300/50 mt-0.5">mulai dari</div>
                  </div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute -top-px -right-px w-16 h-16 overflow-hidden rounded-tr-3xl">
                <div className="absolute top-0 right-0 w-[2px] h-8 bg-terracotta/40" />
                <div className="absolute top-0 right-0 h-[2px] w-8 bg-terracotta/40" />
              </div>
            </div>

            {/* Trust badges below card */}
            <div className="flex items-center gap-6 mt-6 pl-2">
              {['Gratis konsultasi', 'Revisi unlimited', 'Bayar pas jadi'].map((t, i) => (
                <div key={t} className={`flex items-center gap-2 text-xs text-espresso-soft/40 dark:text-warm-300/40 ${i === 2 ? 'hidden sm:flex' : ''}`}>
                  <span className="w-1 h-1 rounded-full bg-sage" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
