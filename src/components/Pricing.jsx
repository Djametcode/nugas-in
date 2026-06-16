const plans = [
  {
    name: 'Basic',
    price: '500K',
    desc: 'Landing page satu halaman. Responsive, cepat, langsung online.',
    features: ['1 halaman', 'Responsive', '3x revisi', 'Source code'],
    cta: 'Pilih ini',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '1.5jt',
    desc: 'Multi-halaman dengan CMS. Cocok buat bisnis yang butuh update konten sendiri.',
    features: ['Sampai 5 halaman', 'CMS sederhana', 'Revisi unlimited', 'SEO dasar', 'Domain + hosting 1 tahun'],
    cta: 'Pilih ini',
    highlight: true,
  },
  {
    name: 'Custom',
    price: 'Chat',
    desc: 'E-commerce, web app, dashboard, tugas akhir. Apapun bisa.',
    features: ['Toko online', 'Web app / dashboard', 'API integration', 'Tugas akhir / skripsi'],
    cta: 'Ngobrol dulu',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="max-w-lg mb-16">
          <div className="reveal flex items-center gap-3 mb-5">
            <span className="w-8 h-[1px] bg-terracotta" />
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-terracotta">Harga</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl tracking-tight leading-[1.05] mb-5">
            Transparan,<br /><span className="italic">Tanpa Drama</span>
          </h2>
        </div>

        {/* Pricing cards - not typical 3-tower */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((p, i) => (
            <div key={p.name} className={`reveal group relative rounded-2xl p-7 md:p-8 transition-all duration-500 ${
              p.highlight
                ? 'bg-espresso dark:bg-warm-100 text-cream dark:text-espresso ring-1 ring-terracotta/20'
                : 'bg-white dark:bg-warm-300/[0.04] border border-warm-200/40 dark:border-warm-300/[0.06] hover:border-terracotta/20 dark:hover:border-terracotta/10'
            }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {p.highlight && (
                <div className="absolute -top-3 right-8 bg-terracotta text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase">
                  Populer
                </div>
              )}

              <div className={`text-[11px] font-medium tracking-[0.15em] uppercase mb-4 ${p.highlight ? 'text-cream/60 dark:text-espresso/50' : 'text-espresso-soft/40 dark:text-warm-300/40'}`}>
                {p.name}
              </div>

              <div className="font-display text-4xl md:text-5xl mb-2">
                {p.price === 'Chat' ? (
                  <span className="italic">{p.price}</span>
                ) : (
                  <><span className="text-lg align-top mr-0.5">Rp</span>{p.price}</>
                )}
              </div>

              <p className={`text-sm leading-relaxed mb-8 ${p.highlight ? 'text-cream/70 dark:text-espresso/60' : 'text-espresso-soft/50 dark:text-warm-300/50'}`}>
                {p.desc}
              </p>

              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2.5 text-sm ${p.highlight ? 'text-cream/80 dark:text-espresso/70' : 'text-espresso-soft/60 dark:text-warm-300/60'}`}>
                    <span className={`w-1 h-1 rounded-full ${p.highlight ? 'bg-terracotta' : 'bg-sage'}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <a href={`https://wa.me/62895377079683?text=Halo%2C%20saya%20mau%20paket%20${p.name}`}
                className={`block w-full text-center text-sm font-medium py-3.5 rounded-full transition-all active:scale-[0.97] ${
                  p.highlight
                    ? 'bg-cream dark:bg-espresso text-espresso dark:text-cream hover:opacity-90'
                    : 'bg-espresso/5 dark:bg-warm-300/10 text-espresso dark:text-warm-100 hover:bg-espresso/10 dark:hover:bg-warm-300/15'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="reveal mt-8 text-xs text-espresso-soft/30 dark:text-warm-300/30 text-center">
          DP 50% di awal, sisanya pas website selesai. Garansi revisi 30 hari.
        </p>
      </div>
    </section>
  )
}
