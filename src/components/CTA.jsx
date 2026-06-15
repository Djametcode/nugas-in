export default function CTA() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="reveal relative overflow-hidden rounded-3xl bg-espresso dark:bg-warm-100 p-10 md:p-16 lg:p-20">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-sage/10 rounded-full blur-[60px]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.05] text-cream dark:text-espresso mb-5">
                Siap Bikin<br /><span className="italic">Websitemu?</span>
              </h2>
              <p className="text-cream/60 dark:text-espresso/50 text-base leading-relaxed max-w-[36ch] mb-8">
                Chat sekarang, gratis konsultasi. Gak cocok? Gak bayar.
              </p>
              <a href="https://wa.me/6281234567890?text=Halo%20Nugas.in%2C%20saya%20mau%20bikin%20website"
                className="group inline-flex items-center gap-3 bg-cream dark:bg-espresso text-espresso dark:text-cream font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition-all active:scale-[0.97]"
              >
                Chat WhatsApp
                <span className="w-7 h-7 rounded-full bg-espresso/10 dark:bg-cream/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </span>
              </a>
            </div>

            {/* Right side: contact info */}
            <div className="lg:text-right">
              <div className="space-y-4">
                <div>
                  <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-cream/40 dark:text-espresso/30 mb-1">WhatsApp</div>
                  <div className="text-cream dark:text-espresso font-medium">0812-3456-7890</div>
                </div>
                <div>
                  <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-cream/40 dark:text-espresso/30 mb-1">Respon</div>
                  <div className="text-cream dark:text-espresso font-medium">Biasanya &lt; 1 jam</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
