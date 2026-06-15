export default function Footer() {
  return (
    <footer className="py-10 md:py-12 border-t border-warm-200/30 dark:border-warm-300/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-display text-xl tracking-tight">
            <span className="text-espresso dark:text-warm-100">Nugas</span>
            <span className="text-terracotta">.</span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs text-espresso-soft/40 dark:text-warm-300/40">
            <a href="#" className="hover:text-espresso dark:hover:text-warm-100 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-espresso dark:hover:text-warm-100 transition-colors">Syarat</a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-espresso-soft/30 dark:text-warm-300/30">
            &copy; 2026 Nugas.in
          </div>
        </div>
      </div>
    </footer>
  )
}
