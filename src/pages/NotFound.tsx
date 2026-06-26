import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ChevronIcon from '@/components/ChevronIcon';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found — Nectar Shavit';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-sm font-bold tracking-widest uppercase text-brandOrange mb-3">404</p>
        <h1 className="text-[56px] font-black tracking-tight text-mainText mb-4 leading-tight">
          Page not found.
        </h1>
        <p className="text-base text-muted mb-10 max-w-[360px] leading-[1.7]">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brandOrange text-cream rounded-full text-[14px] font-semibold no-underline hover:opacity-90 transition-opacity duration-200"
        >
          <ChevronIcon direction="left" size={13} />
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
