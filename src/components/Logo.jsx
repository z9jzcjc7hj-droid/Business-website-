// -----------------------------------------------------------------------
// Logo placeholder component.
//
// TO ADD YOUR REAL LOGO:
//   1. Drop your logo file into /public/images/logo/ (e.g. logo.png or logo.svg)
//   2. Replace the placeholder markup below with:
//        <img src="/images/logo/logo.png" alt="R&N Detailing LLC logo" className={imgClassName} />
//   3. This component is used in Navbar, Hero, Footer, and the mobile menu,
//      so updating it here updates the logo everywhere at once.
// -----------------------------------------------------------------------
export default function Logo({ size = 'md', showText = true }) {
  const dims = {
    sm: 'h-9 w-9 text-sm',
    md: 'h-11 w-11 text-base',
    lg: 'h-16 w-16 text-2xl',
  }[size];

  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex ${dims} items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple-400 to-brand-purple-800 font-heading font-bold text-white shadow-glow shrink-0`}
        aria-hidden="true"
      >
        R&amp;N
      </div>
      {showText && (
        <span className="font-heading font-semibold leading-tight text-white">
          <span className="block text-base sm:text-lg tracking-wide">R&amp;N DETAILING</span>
          <span className="block text-[10px] sm:text-xs font-body font-normal tracking-[0.2em] text-brand-purple-300 uppercase">
            LLC
          </span>
        </span>
      )}
    </div>
  );
}
