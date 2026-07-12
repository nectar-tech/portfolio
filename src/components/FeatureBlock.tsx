import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { FeatureScreen, FeatureIcon } from '@/data/projects';
import ImagePlaceholder from '@/components/ImagePlaceholder';

const icons: Record<FeatureIcon, ReactNode> = {
  person: (
    <svg className="w-5 h-5 stroke-brandOrange fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  calendar: (
    <svg className="w-5 h-5 stroke-brandOrange fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  layers: (
    <svg className="w-5 h-5 stroke-brandOrange fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  sun: (
    <svg className="w-5 h-5 stroke-brandOrange fill-none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" /><line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" /><line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
    </svg>
  ),
  play: (
    <svg className="w-5 h-5 stroke-brandOrange fill-none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5 stroke-brandOrange fill-none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  heart: (
    <svg className="w-5 h-5 stroke-brandOrange fill-none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  star: (
    <svg className="w-5 h-5 stroke-brandOrange fill-none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
};

interface FeatureBlockProps {
  screen: FeatureScreen;
  hideHeader?: boolean;
}

function ImageCarousel({ images }: { images: { src: string; alt: string }[] }) {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = (next: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setIndex(next);
    setTimeout(() => setTransitioning(false), 700);
  };

  useEffect(() => {
    if (images.length < 2) return;
    const t1 = setTimeout(() => goTo(1), 2000);
    const t2 = setTimeout(() => goTo(0), 5500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);


  return (
    <div className="relative">
      <div className="rounded-[30px] overflow-hidden bg-cardBg shadow-[0_5px_6px_rgba(0,0,0,0.11)]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full shrink-0 block"
            />
          ))}
        </div>
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={() => goTo(Math.max(0, index - 1))}
            aria-label="Previous image"
            className="absolute left-5 top-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow transition disabled:opacity-30"
            style={index > 0 ? { animation: 'nudgeLeft 3s ease-in-out infinite', transform: 'translateX(0) translateY(-50%)' } : { transform: 'translateY(-50%)', opacity: 0.3 }}
            disabled={index === 0}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#2D2D2D">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            onClick={() => goTo(Math.min(images.length - 1, index + 1))}
            aria-label="Next image"
            className="absolute right-5 top-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow transition disabled:opacity-30"
            style={index < images.length - 1 ? { animation: 'nudgeRight 3s ease-in-out infinite', transform: 'translateX(0) translateY(-50%)' } : { transform: 'translateY(-50%)', opacity: 0.3 }}
            disabled={index === images.length - 1}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#2D2D2D">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => {
              const dotIndex = images.length - 1 - i;
              return (
                <button
                  key={i}
                  onClick={() => goTo(dotIndex)}
                  aria-label={`Go to image ${dotIndex + 1}`}
                  className={`w-2 h-2 rounded-full transition ${dotIndex === index ? 'bg-brandOrange' : 'bg-white/60'}`}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default function FeatureBlock({ screen, hideHeader }: FeatureBlockProps) {
  return (
    <div className="mt-12 pt-12 first:border-0 first:mt-0 first:pt-0">
      {!hideHeader && (
        <div className="flex items-start gap-5 mb-5">
          <div className="w-[52px] h-[52px] rounded-full bg-brandLight/20 flex items-center justify-center shrink-0 mt-0.5">
            {icons[screen.icon]}
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-base font-bold text-brandOrange tracking-[0.08em] mb-1">{screen.number}</span>
            <h3 className="text-[22px] font-extrabold text-mainText tracking-tight mb-1">{screen.title}</h3>
          </div>
        </div>
      )}
      {hideHeader && screen.title && (
        <h3 className="text-[22px] font-extrabold text-mainText tracking-tight mb-5">{screen.title}</h3>
      )}
      <p className="text-lg text-muted leading-[1.75] max-w-[700px] mb-6">{screen.description}</p>
      {screen.images && screen.images.length > 0 ? (
        <ImageCarousel images={screen.images} />
      ) : screen.image ? (
        <div className="rounded-[30px] overflow-hidden bg-cardBg shadow-[0_5px_6px_rgba(0,0,0,0.11)] group">
          <img
            className="w-full block transition-transform duration-500 group-hover:scale-[1.015]"
            src={screen.image}
            alt={screen.imageAlt}
            loading="lazy"
          />
        </div>
      ) : (
        <div className="rounded-[30px] overflow-hidden bg-cardBg shadow-[0_5px_6px_rgba(0,0,0,0.11)]">
          <ImagePlaceholder minHeight="min-h-[320px]" />
        </div>
      )}
    </div>
  );
}
