import { useEffect, useRef } from 'react';
import { projects } from '@/data/projects';
import { personal } from '@/data/personal';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import ChevronIcon from '@/components/ChevronIcon';

export default function Home() {
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.title = `${personal.name} — ${personal.title}`;
  }, []);

  function scrollToProjects() {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      {/* HERO */}
      <section className="px-6 md:px-[60px] pt-[80px] pb-[96px] max-w-[1100px] mx-auto w-full animate-fadeUp">
        <p className="text-sm font-bold tracking-widest uppercase text-brandOrange mb-6">{personal.title}</p>
        <h1 className="text-[56px] md:text-[7vw] lg:text-[88px] font-black leading-[0.95] tracking-tight text-mainText max-w-[900px] mb-8">
          {personal.name}
        </h1>
        <p className="text-lg md:text-xl text-muted leading-[1.7] max-w-[560px] mb-10">{personal.tagline}</p>
        <button
          onClick={scrollToProjects}
          className="inline-flex items-center gap-2.5 px-6 py-3 bg-brandOrange text-cream rounded-full text-[14px] font-semibold hover:opacity-90 transition-opacity duration-200"
        >
          View Projects
          <ChevronIcon direction="right" size={13} strokeWidth={2.5} />
        </button>
      </section>

      {/* PROJECTS */}
      <section
        ref={projectsRef}
        id="projects"
        className="border-t border-brandBorder px-6 md:px-[60px] py-20 max-w-[1100px] mx-auto w-full"
      >
        <p className="text-sm font-bold tracking-widest uppercase text-brandOrange mb-3">Selected Work</p>
        <h2 className="text-[28px] md:text-[3vw] lg:text-[36px] font-extrabold tracking-tight text-mainText mb-12">
          Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-t border-brandBorder bg-cardBg px-6 md:px-[60px] py-20">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-sm font-bold tracking-widest uppercase text-brandOrange mb-3">About</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-[28px] md:text-[3vw] lg:text-[36px] font-extrabold tracking-tight text-mainText mb-6 leading-tight">
                Turning complexity into clarity.
              </h2>
              <p className="text-base text-muted leading-[1.85]">{personal.bio}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-mainText mb-4 tracking-wide">Tools & Skills</p>
              <div className="flex flex-wrap gap-2.5">
                {personal.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-[18px] py-2 border-[1.5px] border-mainText/20 rounded-full text-sm font-medium text-mainText bg-transparent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-t border-brandBorder px-6 md:px-[60px] py-20 max-w-[1100px] mx-auto w-full">
        <p className="text-sm font-bold tracking-widest uppercase text-brandOrange mb-3">Contact</p>
        <h2 className="text-[28px] md:text-[3vw] lg:text-[36px] font-extrabold tracking-tight text-mainText mb-6">
          Let's work together.
        </h2>
        <p className="text-base text-muted leading-[1.85] max-w-[480px] mb-10">
          Open to new projects and collaborations. Drop me a message and I'll get back to you.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-brandOrange text-cream rounded-full text-[14px] font-semibold no-underline hover:opacity-90 transition-opacity duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {personal.email}
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-brandOrange rounded-full text-[14px] font-semibold no-underline border-[1.5px] border-brandOrange/45 hover:bg-brandOrange/10 hover:border-brandOrange transition-all duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <a
            href={`https://wa.me/${personal.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-[#25D366] rounded-full text-[14px] font-semibold no-underline border-[1.5px] border-[#25D366]/40 hover:bg-[#25D366]/10 hover:border-[#25D366] transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
