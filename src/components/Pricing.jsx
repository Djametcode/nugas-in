const CheckIcon = () => (
  <svg className="w-4 h-4 text-brand-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
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
    <section id="pricing" className="py-20 md:py-28 border-t border-zinc-200 dark:border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Harga Transparan</h2>
          <p className="text-zinc-600 dark:text-zinc-400">Gak ada biaya tersembunyi. Pilih yang sesuai kebutuhanmu.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`relative p-6 rounded-2xl ${p.popular ? 'bg-brand-50 dark:bg-brand-500/10 border-2 border-brand-400 dark:border-brand-500/50' : 'bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50'}`}>
              {p.popular && <div className="absolute -top-3 left-6 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full">POPULER</div>}
              <div className={`text-sm font-medium mb-2 ${p.popular ? 'text-brand-600 dark:text-brand-400' : 'text-zinc-500 dark:text-zinc-400'}`}>{p.name}</div>
              <div className="text-3xl font-bold mb-1">{p.price}</div>
              <div className="text-sm text-zinc-500 mb-6">{p.desc}</div>

              <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><CheckIcon />{f}</li>
                ))}
              </ul>

              <a href={`https://wa.me/6281234567890?text=Halo%2C%20saya%20mau%20paket%20${p.name}`} className={`block w-full text-center font-medium px-4 py-3 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] ${p.popular ? 'bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-600/25' : 'bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white'}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
