import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="sticky top-0 z-[100] flex items-center justify-between px-6 md:px-[60px] h-[68px] border-b border-brandBorder bg-cream/90 backdrop-blur-md">
      <Link to="/" className="text-[22px] font-extrabold text-brandOrange tracking-tighter no-underline">
        Nectar.
      </Link>
      <a
        href="#"
        className="inline-flex items-center gap-2 px-5 py-2 bg-transparent text-brandOrange rounded-full text-[13px] font-semibold no-underline border-[1.5px] border-brandOrange/45 hover:bg-brandOrange/10 hover:border-brandOrange transition-all duration-200"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v13" />
          <path d="M7 11l5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
        Download CV
      </a>
    </nav>
  );
}
