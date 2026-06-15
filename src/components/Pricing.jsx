const CheckIcon = () => (
  <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
)

const plans = [
  {
    name: 'BASIC',
    price: 'Rp 500K',
    desc: 'satu kali bayar',
    features: ['Landing page 1 halaman', 'Responsive design', '3x revisi', 'Source code'],
    cta: 'Pilih Basic',
    popular: false,
  },
  {
    name: 'PRO',
    price: 'Rp 1.5Jt',
    desc: 'satu kali bayar',
    features: ['Multi halaman (sampai 5)', 'CMS sederhana', 'Revisi unlimited', 'SEO setup', 'Domain & hosting 1 tahun'],
    cta: 'Pilih Pro',
    popular: true,
  },
  {
    name: 'CUSTOM',
    price: 'Chat Harga',
    desc: 'sesuai kebutuhan',
    features: ['E-commerce / toko online', 'Web app / dashboard', 'API integration', 'Tugas akhir / skripsi', 'Bonus konsultasi'],
    cta: 'Chat Sekarang',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-14">
          <p className="reveal text-xs font-semibold tracking-widest uppercase text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)] mb-3">Harga</p>
          <h2 className="reveal text-3xl md:text-4xl font-bold tracking-tight mb-4">Harga Transparan</h2>
          <p className="reveal reveal-delay-1 text-slate-500 dark:text-slate-400 leading-relaxed">Gak ada biaya tersembunyi. Pilih yang sesuai kebutuhanmu.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((p) => (
            <div key={p.name} className={`reveal relative p-6 rounded-2xl transition-all duration-300 ${
              p.popular
                ? 'bg-[var(--color-brand-50)] dark:bg-[var(--color-brand-500)]/8 border-2 border-[var(--color-brand-400)] dark:border-[var(--color-brand-500)]/40 shadow-lg shadow-[var(--color-brand-200)]/30 dark:shadow-none'
                : 'bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/40 hover:border-slate-300 dark:hover:border-slate-600'
            }`}>
              {p.popular && (
                <div className="absolute -top-3 left-6 bg-[var(--color-brand-600)] text-white text-[11px] font-bold tracking-wide px-3 py-1 rounded-full uppercase">Populer</div>
              )}

              <div className={`text-xs font-semibold tracking-wider uppercase mb-3 ${p.popular ? 'text-[var(--color-brand-600)] dark:text-[var(--color-brand-400)]' : 'text-slate-400'}`}>{p.name}</div>
              <div className="text-3xl font-bold mb-1">{p.price}</div>
              <div className="text-sm text-slate-400 mb-6">{p.desc}</div>

              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5"><CheckIcon />{f}</li>
                ))}
              </ul>

              <a href={`https://wa.me/6281234567890?text=Halo%2C%20saya%20mau%20paket%20${p.name}`} className={`block w-full text-center text-sm font-medium px-4 py-3 rounded-xl transition-all active:scale-[0.97] ${
                p.popular
                  ? 'bg-[var(--color-brand-600)] hover:bg-[var(--color-brand-700)] text-white shadow-lg shadow-[var(--color-brand-600)]/20'
                  : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
              }`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
