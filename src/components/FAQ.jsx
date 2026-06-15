const faqs = [
  { q: 'Berapa lama pengerjaan?', a: 'Landing page: 3-5 hari kerja. Multi halaman: 1-2 minggu. E-commerce: 2-4 minggu. Tergantung kompleksitas dan deadline yang disepakati.' },
  { q: 'Bisa bayar bertahap?', a: 'Bisa. DP 50% di awal, sisanya setelah selesai. Untuk proyek custom, bisa nego jadwal pembayaran.' },
  { q: 'Teknologi apa yang dipakai?', a: 'Tergantung kebutuhan. React/Next.js, Tailwind CSS, Node.js untuk backend. Bisa juga pakai WordPress kalau lebih cocok.' },
  { q: 'Ada garansi?', a: 'Ya, semua paket mendapat garansi bug fix gratis selama 30 hari setelah serah terima. Revisi unlimited selama masa pengerjaan.' },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 border-t border-zinc-200 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Pertanyaan Umum</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex items-center justify-between cursor-pointer p-4 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700/50 transition-colors">
                <span className="font-medium">{f.q}</span>
                <svg className="w-5 h-5 text-zinc-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-4 pb-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
