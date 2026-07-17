import { Link } from 'react-router-dom';
import type { CaseStudyProject } from '@/data/projects';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import ChevronIcon from '@/components/ChevronIcon';

interface ProjectCardProps {
  project: CaseStudyProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { id, client, year, headline, tags, heroImage, heroImagePosition } = project;

  return (
    <Link
      to={`/case-study/${id}`}
      className="group flex flex-col md:flex-row md:items-stretch md:h-[420px] rounded-[30px] overflow-hidden bg-white no-underline shadow-[0_5px_6px_rgba(0,0,0,0.11)] transition-all duration-300"
    >
      <div className="w-full md:w-[55%] lg:w-[58%] md:shrink-0 overflow-hidden">
        {heroImage ? (
          <img
            src={heroImage}
            alt={`${client} case study`}
            className="w-full h-full object-cover block aspect-[16/9] md:aspect-auto transition-transform duration-500 group-hover:scale-[1.03]"
            style={{ objectPosition: heroImagePosition ?? 'center' }}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full min-h-[260px]">
            <ImagePlaceholder minHeight="h-full" />
          </div>
        )}
      </div>
      <div className="p-8 lg:p-12 flex flex-col gap-4 flex-1 justify-center">
        <p className="text-base font-semibold text-brandOrange tracking-wide">
          {client} <span className="text-muted font-normal">{year}</span>
        </p>
        <p className="text-[22px] lg:text-[28px] font-bold text-mainText leading-snug tracking-tight whitespace-pre-line line-clamp-3">{headline}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="inline-flex items-center px-3.5 py-1 rounded-full text-[12px] font-medium text-muted bg-[#F7F7F7] opacity-70">
              {tag}
            </span>
          ))}
        </div>
        <span className="self-start inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brandOrange text-cream text-[15px] font-semibold hover:bg-[#784ECC] transition-all duration-200">
          View Case Study
          <ChevronIcon direction="right" size={13} />
        </span>
      </div>
    </Link>
  );
}
