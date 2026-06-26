import { Link } from 'react-router-dom';
import type { CaseStudyProject } from '@/data/projects';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import ChevronIcon from '@/components/ChevronIcon';

interface ProjectCardProps {
  project: CaseStudyProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { id, client, year, headline, tags, heroImage } = project;

  return (
    <Link
      to={`/case-study/${id}`}
      className="group flex flex-col rounded-2xl overflow-hidden border border-brandBorder bg-cardBg no-underline hover:border-brandOrange/40 transition-all duration-300"
    >
      <div className="overflow-hidden">
        {heroImage ? (
          <img
            src={heroImage}
            alt={`${client} case study`}
            className="w-full aspect-[16/10] object-cover block transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="aspect-[16/10]">
            <ImagePlaceholder minHeight="h-full" />
          </div>
        )}
      </div>
      <div className="p-7 flex flex-col gap-4 flex-1">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-brandOrange tracking-wide">
            {client} <span className="text-muted font-normal">{year}</span>
          </p>
          <span className="w-7 h-7 rounded-full border border-brandOrange/30 flex items-center justify-center text-brandOrange group-hover:bg-brandOrange group-hover:text-cream group-hover:border-brandOrange transition-all duration-200">
            <ChevronIcon direction="right" size={13} />
          </span>
        </div>
        <p className="text-[17px] font-bold text-mainText leading-snug tracking-tight line-clamp-3">{headline}</p>
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {tags.map((tag) => (
            <span key={tag} className="inline-flex items-center px-3.5 py-1 border border-mainText/15 rounded-full text-xs font-medium text-muted">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
