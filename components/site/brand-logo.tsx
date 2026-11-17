type BrandLogoProps = {
  variant?: 'light' | 'dark';
};

export function BrandLogo({ variant = 'light' }: BrandLogoProps) {
  const isLight = variant === 'light';

  return (
    <span className="inline-flex items-center gap-2 sm:gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary/45 bg-navy shadow-lg shadow-navy/20 sm:h-11 sm:w-11 sm:rounded-2xl">
        <svg
          aria-hidden="true"
          viewBox="0 0 40 40"
          fill="none"
          className="h-7 w-7 sm:h-8 sm:w-8"
        >
          <path
            d="m6.5 25 3-7.5a3 3 0 0 1 2.8-1.9h15.4a3 3 0 0 1 2.8 1.9l3 7.5 1.5 2v5H5v-5l1.5-2Z"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 25h28M11 31v2m18-2v2M12 12l4 4 8-8"
            stroke="#d58a60"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`whitespace-nowrap text-[17px] font-bold tracking-[-0.045em] sm:text-[21px] lg:text-[23px] ${
            isLight ? 'text-white' : 'text-navy'
          }`}
        >
          Car<span className="font-semibold text-primary">IntelCheck</span>
        </span>
        <span
          className={`mt-1 whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.16em] sm:mt-1.5 sm:text-[10px] sm:tracking-[0.18em] ${
            isLight ? 'text-white' : 'text-primary'
          }`}
        >
          Digital reports · UK
        </span>
      </span>
    </span>
  );
}
