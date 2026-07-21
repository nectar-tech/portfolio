import { useEffect } from 'react';
import { projects } from '@/data/projects';
import { personal } from '@/data/personal';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  useEffect(() => {
    document.title = `${personal.name} - ${personal.title}`;
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      {/* HERO */}
      <section className="w-full bg-white animate-fadeUp">
        <div className="w-full">
          <img
            src="/images/home/hero-stamps-mobile.png"
            alt="Collection of stamp illustrations representing product design, UX, UI, learning technologies, and game design"
            className="w-full h-auto object-contain md:hidden mt-10"
          />
          <div className="px-6 md:px-[60px] py-10 md:py-24 max-w-[1200px] mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1">
              <h1 className="text-[32px] sm:text-[40px] md:text-[52px] leading-[1.15] font-extrabold text-mainText">
                Hi! I'm Nectar.
                <br />
                A product designer.
              </h1>
              <p className="mt-6 font-handwriting text-[22px] sm:text-[26px] md:text-[30px] text-muted leading-[1.5]">
                <span className="block border-b border-brandBorder pb-2 mb-3">Here to solve design challenges</span>
                <span className="block border-b border-brandBorder pb-2 mb-3">and create simple, meaningful</span>
                <span className="block border-b border-brandBorder pb-2">solutions.</span>
              </p>
            </div>
            <div className="hidden md:block flex-1 max-w-none">
              <img
                src="/images/home/hero-stamps.png"
                alt="Collection of stamp illustrations representing product design, UX, UI, learning technologies, and game design"
                className="w-full h-auto object-contain scale-150"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="px-6 md:px-[60px] pb-20 pt-6 max-w-[1200px] mx-auto w-full"
      >
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="w-full bg-white">
      <div className="px-6 md:px-[60px] py-20 max-w-[1200px] mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 order-2 md:order-1">
            <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-brandOrange mb-4">
              I've always believed that...
            </p>
            <h2 className="text-[28px] md:text-[36px] font-extrabold tracking-tight text-mainText mb-6 leading-[1.15]">
              Great design is about connecting the dots.
            </h2>
            <div className="space-y-4 text-[17px] text-mainText/70 leading-[1.75]">
              <p>
                That's why my playground spans across learning technologies, computer game design, and complex web systems. I love taking intricate data or structural chaos and turning them into clean, intuitive, and engaging digital experiences.
              </p>
              <p>
                Today, I bring this multidisciplinary approach into my work as a Product Designer, combining my academic background with hands-on UX/UI design experience in IDF's 8200 unit.
              </p>
            </div>
            {personal.cvUrl && (
              <a
                href={personal.cvUrl}
                download="Nectar Shavit Product Design CV.pdf"
                aria-label="Download CV"
                className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 bg-brandOrange text-cream rounded-full text-[15px] font-semibold no-underline hover:bg-[#784ECC] transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
            )}
          </div>
          <div className="flex-shrink-0 order-1 md:order-2 w-full md:w-[30%]">
            <img
              src="/images/about.jpg"
              alt="Nectar Shavit"
              className="w-full rounded-[20px] object-cover shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
              style={{ height: '420px', objectPosition: 'center 30%' }}
            />
          </div>
        </div>
      </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 md:px-[60px] py-20 max-w-[1100px] mx-auto w-full">
        <h2 className="text-[32px] md:text-[3.5vw] lg:text-[42px] font-extrabold tracking-tight text-mainText mb-10 text-center">
          Get in Touch
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="w-12 h-12 bg-brandOrange text-cream rounded-full flex items-center justify-center no-underline hover:bg-[#784ECC] transition-colors duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-12 h-12 bg-brandOrange text-cream rounded-full flex items-center justify-center no-underline hover:bg-[#784ECC] transition-colors duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href={`https://wa.me/${personal.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-12 h-12 bg-brandOrange text-cream rounded-full flex items-center justify-center no-underline hover:bg-[#784ECC] transition-colors duration-200"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />

      {/* WhatsApp FAB */}
      <a
        href={`https://wa.me/${personal.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[200] w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:scale-110 hover:shadow-[0_8px_32px_rgba(37,211,102,0.55)] transition-all duration-200 no-underline"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-[30px] h-[30px]">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
