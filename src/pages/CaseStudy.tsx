import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { projects } from '@/data/projects';
import { personal } from '@/data/personal';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import BulletItem from '@/components/BulletItem';
import ChevronIcon from '@/components/ChevronIcon';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import FeatureBlock from '@/components/FeatureBlock';
import ArchitectureSection from '@/components/ArchitectureSection';

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    if (project) {
      document.title = `${project.client} Case Study — Nectar Shavit`;
    }
  }, [project]);

  if (!project) return <Navigate to="/404" replace />;

  const { client, year, headline, tags, heroImage, challenge, architecture, highlights, keyFeatures, impact, footerNav } = project;

  return (
    <div className="min-h-screen text-left flex flex-col">
      <Nav />

      {/* HERO */}
      <section className="pt-[52px] pb-[56px] px-6 md:px-[60px] max-w-[1100px] mx-auto w-full animate-fadeUp">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted no-underline mb-10 hover:text-mainText transition-colors duration-200"
        >
          <ChevronIcon direction="left" />
          Back to Portfolio
        </Link>
        <p className="text-sm font-semibold text-brandOrange mb-4 tracking-wide">
          {client} <span className="text-muted font-normal">{year}</span>
        </p>
        <h1 className="text-[52px] md:text-[8vw] lg:text-[100px] font-black leading-[0.96] tracking-tight text-mainText max-w-[900px] mb-7">
          {headline}
        </h1>
        <div className="flex flex-wrap gap-2.5 mb-12">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-[18px] py-2 border-[1.5px] border-mainText/20 rounded-full text-sm font-medium text-mainText bg-transparent"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* HERO IMAGE */}
      <div className="w-full max-w-[1100px] mx-auto px-6 md:px-[60px] animate-fadeUpDelayed">
        <div className="rounded-2xl overflow-hidden bg-cardBg">
          {heroImage ? (
            <img src={heroImage} alt={`${client} hero`} className="w-full block" loading="lazy" />
          ) : (
            <ImagePlaceholder minHeight="min-h-[420px]" />
          )}
        </div>
      </div>

      {/* CONTENT BLOCK */}
      <div className="max-w-[760px] mx-auto py-20 px-6 md:px-[60px] w-full">
        {/* Challenge */}
        <div className="mb-16">
          <SectionHeader label={challenge.label} title={challenge.title} />
          <ul className="flex flex-col gap-3.5 mt-5">
            {challenge.bullets.map((b) => (
              <BulletItem key={b.title} title={b.title} body={b.body} />
            ))}
          </ul>
        </div>

        <hr className="border-0 border-t border-brandBorder my-16" />

        {/* Architecture */}
        <div className="mb-16">
          <ArchitectureSection data={architecture} />
        </div>

        <hr className="border-0 border-t border-brandBorder my-16" />

        {/* Highlights */}
        <div>
          <SectionHeader label={highlights.label} title={highlights.title} />
          <ul className="flex flex-col gap-3.5 mt-5">
            {highlights.bullets.map((b) => (
              <BulletItem key={b.title} title={b.title} body={b.body} />
            ))}
          </ul>
        </div>
      </div>

      {/* KEY FEATURES */}
      <div className="max-w-[760px] mx-auto pt-16 pb-20 px-6 md:px-[60px] border-t border-brandBorder w-full">
        <SectionHeader
          label={keyFeatures.label}
          title={keyFeatures.title}
          titleClassName="text-[22px] md:text-[3vw] lg:text-[32px] font-extrabold tracking-tight text-mainText mb-2"
        />
        {keyFeatures.screens.map((screen) => (
          <FeatureBlock key={screen.number} screen={screen} />
        ))}
      </div>

      {/* IMPACT & REFLECTION */}
      <div className="bg-brandOrange/5 border-y border-brandBorder py-16 px-6 md:px-[60px]">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader
            label={impact.label}
            title={impact.title}
            titleClassName="text-[22px] md:text-[3vw] lg:text-[32px] font-extrabold tracking-tight text-mainText mb-4"
          />
          <p className="text-base text-muted leading-[1.85] max-w-[680px]">{impact.body}</p>
        </div>
      </div>

      {/* FOOTER NAV */}
      <nav className="border-t border-brandBorder bg-cream px-6 md:px-[60px] h-[60px] flex items-center justify-between mt-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brandOrange no-underline hover:opacity-70 transition-opacity"
        >
          <ChevronIcon direction="left" />
          All Projects
        </Link>
        <div className="flex items-center gap-6">
          {footerNav.prev && (
            <Link
              to={footerNav.prev.href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brandOrange no-underline hover:opacity-70 transition-opacity border-r border-brandBorder pr-6"
            >
              <ChevronIcon direction="left" />
              {footerNav.prev.label}
            </Link>
          )}
          {footerNav.next && (
            <Link
              to={footerNav.next.href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brandOrange no-underline hover:opacity-70 transition-opacity"
            >
              {footerNav.next.label}
              <ChevronIcon direction="right" />
            </Link>
          )}
        </div>
      </nav>

      <Footer />

      {/* WhatsApp FAB */}
      <a
        href={`https://wa.me/${personal.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[200] w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:scale-110 hover:shadow-[0_8px_32px_rgba(37,211,102,0.55)] transition-all duration-200 no-underline"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-[30px] h-[30px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
