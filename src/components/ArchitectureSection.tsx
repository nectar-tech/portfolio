import { useRef, useEffect } from 'react';
import SectionHeader from '@/components/SectionHeader';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import type { CaseStudyProject } from '@/data/projects';

interface ArchitectureSectionProps {
  data: CaseStudyProject['architecture'];
}

function AutoIframe({ src, title }: { src: string; title: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    function resize() {
      try {
        const doc = iframe!.contentDocument || iframe!.contentWindow?.document;
        if (!doc) return;
        const h = doc.documentElement.scrollHeight || doc.body.scrollHeight;
        if (h > 0) iframe!.style.height = h + 'px';
      } catch {
        // cross-origin — fall back to fixed height
      }
    }

    iframe.addEventListener('load', resize);
    return () => iframe.removeEventListener('load', resize);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title={title}
      scrolling="no"
      className="w-full block border-0"
      style={{ height: '480px', overflow: 'hidden' }}
      loading="lazy"
    />
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
          <img
            src={data.image}
            alt={data.imageAlt ?? 'Site architecture diagram'}
            className="w-full block"
            loading="lazy"
          />
        ) : (
          <ImagePlaceholder minHeight="min-h-[320px]" />
        )}
      </div>
    </div>
  );
}
