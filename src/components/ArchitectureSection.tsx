import { useRef, useState, useLayoutEffect } from 'react';
import SectionHeader from '@/components/SectionHeader';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import type { CaseStudyProject } from '@/data/projects';

interface ArchitectureSectionProps {
  data: CaseStudyProject['architecture'];
}

// Natural size of the bundled sitemap diagram (fixed by the SVG it renders).
const DIAGRAM_W = 2520;
const DIAGRAM_H = 1320;

function AutoIframe({ src, title }: { src: string; title: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(wrapper);
    return () => ro.disconnect();
  }, []);

  const scale = width > 0 ? width / DIAGRAM_W : 0;

  return (
    <div ref={wrapperRef} className="w-full relative overflow-hidden" style={{ height: scale > 0 ? DIAGRAM_H * scale : 480 }}>
      <iframe
        src={src}
        title={title}
        scrolling="no"
        className="absolute top-0 left-0 border-0 pointer-events-none"
        style={{
          width: DIAGRAM_W,
          height: DIAGRAM_H,
          transform: `scale(${scale || 1})`,
          transformOrigin: 'top left',
          visibility: scale > 0 ? 'visible' : 'hidden',
        }}
        loading="lazy"
      />
    </div>
  );
}

export default function ArchitectureSection({ data }: ArchitectureSectionProps) {
  return (
    <div>
      <SectionHeader label={data.label} title={data.title} />
      <div className="rounded-[30px] overflow-hidden bg-cardBg mt-5 shadow-[0_5px_6px_rgba(0,0,0,0.11)]">
        {data.iframeUrl ? (
          <AutoIframe src={data.iframeUrl} title="Site architecture diagram" />
        ) : data.image ? (
          <picture>
            {data.imageMobile && <source media="(max-width: 767px)" srcSet={data.imageMobile} />}
            <img
              src={data.image}
              alt={data.imageAlt ?? 'Site architecture diagram'}
              className="w-full block"
              loading="lazy"
            />
          </picture>
        ) : (
          <ImagePlaceholder minHeight="min-h-[320px]" />
        )}
      </div>
    </div>
  );
}
