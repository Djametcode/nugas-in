import { useState, useEffect } from 'react'

export default function Navbar({ dark, setDark }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#services', label: 'Layanan' },
    { href: '#how-it-works', label: 'Proses' },
    { href: '#pricing', label: 'Harga' },
    { href: '#faq', label: 'Tanya' },
  ]

  return (
    <>
      {/* Floating navbar */}
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled
          ? 'w-[calc(100%-2rem)] max-w-3xl'
          : 'w-[calc(100%-2rem)] max-w-3xl'
      }`}>
        <div className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 dark:bg-[#1E1A17]/80 backdrop-blur-xl shadow-lg shadow-black/[0.04] dark:shadow-black/20 border border-warm-200/60 dark:border-warm-300/10'
            : 'bg-transparent'
        }`}>
          {/* Logo */}
          <a href="#" className="font-display text-2xl tracking-tight">
            <span className="text-espresso dark:text-warm-100">Nugas</span>
            <span className="text-terracotta">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="px-3.5 py-2 text-[13px] text-espresso-soft/70 dark:text-warm-300/70 hover:text-espresso dark:hover:text-warm-100 rounded-xl transition-colors duration-200">
                {l.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="p-2.5 rounded-xl hover:bg-warm-100 dark:hover:bg-warm-300/10 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {dark ? (
                <svg className="w-[18px] h-[18px] text-terracotta" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              ) : (
                <svg className="w-[18px] h-[18px] text-espresso-soft/60" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
              )}
            </button>
            <a href="https://wa.me/62895377079683?text=Halo%20Nugas.in%2C%20saya%20mau%20bikin%20website" className="hidden md:inline-flex items-center gap-2 bg-espresso dark:bg-warm-100 text-cream dark:text-espresso text-[13px] font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-all active:scale-[0.97]">
              Chat
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2.5 rounded-xl hover:bg-warm-100 dark:hover:bg-warm-300/10 transition-colors" aria-label="Menu">
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-[1.5px] bg-espresso dark:bg-warm-100 rounded-full transition-all duration-300 origin-left ${mobileOpen ? 'rotate-45 w-[22px]' : 'w-5'}`} />
                <span className={`block h-[1.5px] bg-espresso dark:bg-warm-100 rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 translate-x-2' : 'w-3.5'}`} />
                <span className={`block h-[1.5px] bg-espresso dark:bg-warm-100 rounded-full transition-all duration-300 origin-left ${mobileOpen ? '-rotate-45 w-[22px]' : 'w-5'}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 transition-all duration-500 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-cream/95 dark:bg-cream-dark/95 backdrop-blur-2xl" onClick={() => setMobileOpen(false)} />
        <div className="relative flex flex-col items-center justify-center h-full gap-2">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
              className={`text-3xl font-display text-espresso dark:text-warm-100 py-3 transition-all duration-500 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: mobileOpen ? `${100 + i * 80}ms` : '0ms' }}
            >
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/62895377079683"
            className={`mt-6 bg-espresso dark:bg-warm-100 text-cream dark:text-espresso font-medium px-8 py-3.5 rounded-full transition-all duration-500 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: mobileOpen ? '500ms' : '0ms' }}
          >
            Chat WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
