const services = [
  { icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', title: 'Landing Page', desc: 'Halaman satu yang langsung bikin orang ngerti kamu jual apa.', span: 'md:col-span-2 md:row-span-2', bg: 'bg-warm-50 dark:bg-warm-300/[0.03]' },
  { icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z', title: 'Toko Online', desc: 'Checkout, pembayaran, manajemen produk. Full package.', span: '', bg: 'bg-white dark:bg-warm-300/[0.04]' },
  { icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', title: 'Company Profile', desc: 'Bikin perusahaanmu keliatan profesional di internet.', span: '', bg: 'bg-white dark:bg-warm-300/[0.04]' },
  { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', title: 'Tugas Kuliah', desc: 'Tugas web, TA, skripsi. Kami bantu dari desain sampai deploy.', span: '', bg: 'bg-terracotta/[0.04] dark:bg-terracotta/[0.06]' },
  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Redesign', desc: 'Website lama keliatan jadul? Kami bikin fresh lagi.', span: 'md:col-span-2', bg: 'bg-warm-50 dark:bg-warm-300/[0.03]' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header - left aligned, editorial style */}
        <div className="max-w-lg mb-16">
          <div className="reveal flex items-center gap-3 mb-5">
            <span className="w-8 h-[1px] bg-terracotta" />
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-terracotta">Yang bisa kami bantu</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl tracking-tight leading-[1.05] mb-5">
            Gak Cuma <span className="italic">Bikin</span>
            <br />Tapi Juga <span className="italic">Mikirin</span>
          </h2>
          <p className="reveal reveal-delay-2 text-sm text-espresso-soft/50 dark:text-warm-300/50 leading-relaxed max-w-[36ch]">
            Setiap project kami bantu dari konsep sampai online. Bukan cuma nge-kode.
          </p>
        </div>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div key={s.title} className={`reveal group ${s.span} ${s.bg} border border-warm-200/30 dark:border-warm-300/[0.06] rounded-2xl p-7 md:p-8 hover:border-terracotta/20 dark:hover:border-terracotta/10 transition-all duration-500`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-warm-100 dark:bg-warm-300/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500">
                <svg className="w-[18px] h-[18px] text-espresso-soft/70 dark:text-warm-300/70" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={s.icon} /></svg>
              </div>

              <h3 className="text-base font-medium mb-2 text-espresso dark:text-warm-100">{s.title}</h3>
              <p className="text-sm text-espresso-soft/50 dark:text-warm-300/50 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
