const StatsSection = () => {
  const stats = [
    { number: "2000+", label: "Company" },
    { number: "10+", label: "Years Exp" },
    { number: "800+", label: "Hours of Digital" },
    { number: "150M+", label: "In Teams Revenue" },
  ];

  return (
    <section className="w-full flex justify-center items-center py-8 md:py-12 lg:py-16" style={{background: 'transparent'}}>
      <div className="relative w-full max-w-7xl mx-auto px-2">
        <div
          className="flex flex-row items-center justify-between rounded-full px-4 md:px-16 py-6 md:py-10 backdrop-blur-md"
          style={{
            background: 'rgba(255,255,255,0.10)',
            boxShadow: '0 0 32px 0 rgba(120,255,120,0.08), 0 1.5px 0 0 rgba(120,255,120,0.10) inset',
            border: '1.5px solid rgba(120,255,120,0.10)',
            borderRadius: '9999px',
          }}
        >
          {/* Stat 1 */}
          <div className="flex flex-col items-center flex-1 min-w-[80px] animate-fade-in-up" style={{animationDelay: '0.1s', animationFillMode: 'both'}}>
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight animate-bounce-in" style={{animationDelay: '0.15s', animationFillMode: 'both'}}>
              2000<span className="text-yellow-400 text-xl align-super">+</span>
            </span>
            <span className="text-xs md:text-sm text-neutral-400 mt-1 animate-fade-in" style={{animationDelay: '0.18s', animationFillMode: 'both'}}>Company</span>
          </div>
          {/* Divider */}
          <div className="hidden md:block h-10 w-px bg-gradient-to-b from-transparent via-green-400/20 to-transparent mx-2" />
          {/* Stat 2 */}
          <div className="flex flex-col items-center flex-1 min-w-[80px] animate-fade-in-up" style={{animationDelay: '0.25s', animationFillMode: 'both'}}>
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight animate-bounce-in" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
              10<span className="text-yellow-400 text-xl align-super">+</span>
            </span>
            <span className="text-xs md:text-sm text-neutral-400 mt-1 animate-fade-in" style={{animationDelay: '0.33s', animationFillMode: 'both'}}>Years Exp</span>
          </div>
          <div className="hidden md:block h-10 w-px bg-gradient-to-b from-transparent via-green-400/20 to-transparent mx-2" />
          {/* Stat 3 */}
          <div className="flex flex-col items-center flex-1 min-w-[80px] animate-fade-in-up" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight animate-bounce-in" style={{animationDelay: '0.45s', animationFillMode: 'both'}}>
              800<span className="text-yellow-400 text-xl align-super">+</span>
            </span>
            <span className="text-xs md:text-sm text-neutral-400 mt-1 animate-fade-in" style={{animationDelay: '0.48s', animationFillMode: 'both'}}>Hours of Digital</span>
          </div>
          <div className="hidden md:block h-10 w-px bg-gradient-to-b from-transparent via-green-400/20 to-transparent mx-2" />
          {/* Stat 4 */}
          <div className="flex flex-col items-center flex-1 min-w-[80px] animate-fade-in-up" style={{animationDelay: '0.55s', animationFillMode: 'both'}}>
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight animate-bounce-in" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
              150M<span className="text-yellow-400 text-xl align-super">+</span>
            </span>
            <span className="text-xs md:text-sm text-neutral-400 mt-1 animate-fade-in" style={{animationDelay: '0.63s', animationFillMode: 'both'}}>In Tracked Revenue</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;