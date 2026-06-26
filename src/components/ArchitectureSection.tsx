import SectionHeader from '@/components/SectionHeader';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import type { CaseStudyProject } from '@/data/projects';

interface ArchitectureSectionProps {
  data: CaseStudyProject['architecture'];
}

export default function ArchitectureSection({ data }: ArchitectureSectionProps) {
  return (
    <div>
      <SectionHeader label={data.label} title={data.title} />
      <div className="rounded-2xl overflow-hidden border border-brandBorder bg-cardBg mt-5">
        {data.image ? (
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
