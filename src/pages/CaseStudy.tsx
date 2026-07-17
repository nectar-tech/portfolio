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

const eyebrow = 'text-base font-bold tracking-widest uppercase text-brandOrange mb-3';
const sectionTitle = 'text-[32px] lg:text-[42px] font-extrabold tracking-tight text-mainText leading-tight mb-5';
const subHeading = 'text-[26px] font-extrabold tracking-tight text-mainText leading-tight mb-5';
const cardLabel = 'text-base font-bold tracking-widest uppercase text-brandOrange mb-3';
const bodyText = 'text-lg text-muted leading-[1.85]';
const smallBody = 'text-base text-muted leading-[1.7]';
const cardTitle = 'text-lg font-bold text-mainText mb-2';

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    if (project) {
      document.title = `${project.client} Case Study - Nectar Shavit`;
    }
  }, [project]);

  if (!project) return <Navigate to="/404" replace />;

  const {
    client, year, headline, subtitle, tags, heroImage, heroBg, heroBgMobile, heroBgDarkText,
    problem, rootCauses, consequences, overview, strategy, research, game, narrative, b2b, kpis,
    rimon, targetAudienceImage,
    challenge, architecture, highlights, keyFeatures, impact, footerNav,
    causes, targetAudience, marketResearch, solution,
  } = project;

  const hasNeonSections = !!(overview || strategy || research || game || narrative || b2b || kpis);
  const hasRimonSections = !!rimon;
  const footerBg = (hasNeonSections || hasRimonSections) ? 'bg-white' : '';

  return (
    <div className="min-h-screen text-left flex flex-col">
      <Nav />

      {/* HERO */}
      {heroBg ? (
        <section className="animate-fadeUp w-full">
          {/* Mobile: image above, text below */}
          {heroBgMobile && (
            <div className="md:hidden flex flex-col w-full">
              <img src={heroBgMobile} alt={`${client} hero`} className="w-full block" />
              <div className="px-6 pt-6 pb-8 max-w-[520px] bg-white">
                <Link
                  to="/"
                  className={`inline-flex items-center gap-1.5 text-sm font-medium no-underline mb-6 transition-colors duration-200 ${heroBgDarkText ? 'text-mainText/70 hover:text-mainText' : 'text-white/70 hover:text-white'}`}
                >
                  <ChevronIcon direction="left" />
                  Back to Portfolio
                </Link>
                <p className="text-sm font-semibold text-brandOrange mb-3 tracking-wide">
                  {client} <span className={`font-normal ${heroBgDarkText ? 'text-mainText/60' : 'text-white/60'}`}>{year}</span>
                </p>
                <h1 className="text-[38px] font-black leading-[1] tracking-tight mb-5 text-mainText">
                  {headline}
                </h1>
                <div className="flex flex-wrap gap-2.5">
                  {tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center px-[18px] py-2 rounded-2xl text-sm font-medium bg-mainText/10 text-mainText/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* Desktop: full-width image, cropped from the sides only if needed */}
          <div className="hero-bg-section relative w-full min-h-[560px] hidden md:block">
          <img src={heroBg} alt={`${client} hero`} className="absolute inset-0 w-full h-full object-cover object-right" />
          <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-[60px] py-12 max-w-[520px]">
            <Link
              to="/"
              className={`inline-flex items-center gap-1.5 text-sm font-medium no-underline mb-8 transition-colors duration-200 ${heroBgDarkText ? 'text-mainText/70 hover:text-mainText' : 'text-white/70 hover:text-white'}`}
            >
              <ChevronIcon direction="left" />
              Back to Portfolio
            </Link>
            <p className="text-sm font-semibold text-brandOrange mb-4 tracking-wide">
              {client} <span className={`font-normal ${heroBgDarkText ? 'text-mainText/60' : 'text-white/60'}`}>{year}</span>
            </p>
            <h1 className={`text-[42px] md:text-[56px] font-black leading-[1] tracking-tight mb-6 ${heroBgDarkText ? 'text-mainText' : 'text-white'}`}>
              {headline}
            </h1>
            <div className="flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={`inline-flex items-center px-[18px] py-2 rounded-2xl text-sm font-medium bg-white/20 ${heroBgDarkText ? 'text-mainText/80' : 'text-white/80'}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          </div>
        </section>
      ) : (
        <>
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
            <h1 className="text-[52px] md:text-[8vw] lg:text-[100px] font-black leading-[0.96] tracking-tight text-mainText max-w-[900px] mb-4">
              {headline}
            </h1>
            <div className="flex flex-wrap gap-2.5 mb-12">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-[18px] py-2 rounded-2xl text-sm font-medium bg-white" style={{ color: '#616775' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* HERO IMAGE */}
          <div className="w-full max-w-[1100px] mx-auto px-6 md:px-[60px] animate-fadeUpDelayed">
            <div className="rounded-[16px] md:rounded-[30px] overflow-hidden bg-cardBg shadow-[0_5px_6px_rgba(0,0,0,0.11)]">
              {heroImage ? (
                <img src={heroImage} alt={`${client} hero`} className="w-full block" loading="lazy" />
              ) : (
                <ImagePlaceholder minHeight="min-h-[420px]" />
              )}
            </div>
          </div>
        </>
      )}

      {hasNeonSections ? (
        <>
          {overview && (
            <section className="w-full py-16 px-6 md:px-[60px]">
              <div className="max-w-[1100px] mx-auto">
                <p className={eyebrow}>{overview.label}</p>
                <h2 className={sectionTitle}>{overview.title}</h2>
                <p className={bodyText}>
                  {overview.boldLead && <strong className="font-bold text-mainText">{overview.boldLead}</strong>}
                  {overview.body}
                </p>
              </div>
            </section>
          )}

          {problem && (
            <section className="w-full bg-white py-16 px-6 md:px-[60px]">
              <div className="max-w-[700px] mx-auto">
                <SectionHeader label={problem.label} title={problem.title} />
                {problem.body && <p className={bodyText}>{problem.body}</p>}
              </div>
            </section>
          )}

          {(rootCauses || consequences) && (
            <section className="w-full bg-[#F5F5F5] py-16 px-6 md:px-[60px]">
              <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {rootCauses && (
                  <div>
                    <SectionHeader label={rootCauses.label} title={rootCauses.title} showTitleArrow />
                    <ul className="flex flex-col gap-3.5 mt-5">
                      {rootCauses.bullets.map((b) => (
                        <BulletItem key={b.title} title={b.title} body={b.body} />
                      ))}
                    </ul>
                  </div>
                )}
                {consequences && (
                  <div>
                    <SectionHeader label={consequences.label} title={consequences.title} />
                    <ul className="flex flex-col gap-3.5 mt-5">
                      {consequences.bullets.map((b) => (
                        <BulletItem key={b.title} title={b.title} body={b.body} />
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {strategy && (
            <section className="w-full bg-white py-16 px-6 md:px-[60px]">
              <div className="max-w-[1100px] mx-auto">
                <p className={eyebrow}>{strategy.label}</p>
                <h2 className={sectionTitle}>{strategy.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
                  {strategy.cards.map((card) => (
                    <div key={card.label} className="bg-cream rounded-[30px] shadow-[0_5px_6px_rgba(0,0,0,0.11)] p-6">
                      <p className={cardLabel}>{card.label}</p>
                      <p className={cardTitle}>{card.title}</p>
                      <p className={smallBody}>{card.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {research && (
            <section className="w-full py-16 px-6 md:px-[60px]">
              <div className="max-w-[1100px] mx-auto">
                <SectionHeader label={research.label} title={research.title} />
                {research.body && <p className={`${bodyText} mt-4 mb-2`}>{research.body}</p>}
                <ul className="flex flex-col gap-3.5 mt-5">
                  {research.bullets.map((b) => (
                    <BulletItem key={b.title} title={b.title} body={b.body} />
                  ))}
                </ul>
              </div>
            </section>
          )}

          {game && (
            <section className="w-full bg-white py-16 px-6 md:px-[60px]">
              <div className="max-w-[1100px] mx-auto">
                <SectionHeader label={game.label} title={game.title} />
                <ul className="flex flex-col gap-3.5 mt-5">
                  {game.bullets.map((b, i) => (
                    <BulletItem key={i} title={b.title} body={b.body} />
                  ))}
                </ul>
              </div>
            </section>
          )}

          {narrative && (
            <section className="w-full py-16 px-6 md:px-[60px]">
              <div className="max-w-[1100px] mx-auto">
                <SectionHeader label={narrative.label} title={narrative.title} />
                <p className={`${bodyText} mt-4`}>{narrative.intro}</p>
                <div className="mt-9 rounded-[16px] md:rounded-[30px] overflow-hidden shadow-[0_5px_6px_rgba(0,0,0,0.11)] grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-0" style={{ background: 'linear-gradient(to right, #1E1E1E, #313790)' }}>
                  <div className="flex items-center justify-center pb-0 md:items-stretch">
                    <img src="/images/neon-odyssey/logoIcon.png" alt="Neon Odyssey mosquito character" className="w-full object-contain max-h-[120px] md:max-h-none" />
                  </div>
                  <div className="px-9 pt-2 pb-9 md:p-9 flex flex-col justify-center gap-3.5">
                    {narrative.story.paragraphs.map((p, i) => (
                      <p key={i} className="text-base leading-[1.8] text-white/90">{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* KEY SCREENS */}
          <section className="w-full bg-white py-16 px-6 md:px-[60px]">
            <div className="max-w-[1100px] mx-auto">
              <SectionHeader label={keyFeatures.label} title={keyFeatures.title} />
              {keyFeatures.screens.map((screen, i) => (
                <FeatureBlock key={screen.number} screen={screen} hideHeader isFirst={i === 0} />
              ))}
            </div>
          </section>

          {b2b && (
            <section className="w-full py-16 px-6 md:px-[60px]">
              <div className="max-w-[1100px] mx-auto">
                <p className={eyebrow}>{b2b.label}</p>
                <h2 className={sectionTitle}>{b2b.title}</h2>
                {b2b.body && <p className={`${bodyText} mt-4`}>{b2b.body}</p>}
                <div className="mt-8">
                  {b2b.image ? (
                    <img src={b2b.image} alt={b2b.imageAlt ?? ''} className="w-full block" loading="lazy" />
                  ) : (
                    <ImagePlaceholder minHeight="min-h-[320px]" />
                  )}
                </div>
              </div>
            </section>
          )}

          {kpis && (
            <section className="w-full bg-white py-16 px-6 md:px-[60px]">
              <div className="max-w-[1100px] mx-auto">
                <p className={eyebrow}>{kpis.label}</p>
                <h2 className={sectionTitle}>{kpis.title}</h2>
                {kpis.body && <p className={`${bodyText} mb-10`}>{kpis.body}</p>}
                <div className="mt-10 rounded-[30px] shadow-[0_5px_6px_rgba(0,0,0,0.11)] overflow-hidden bg-cream grid grid-cols-1 md:grid-cols-2">
                  {kpis.cards.map((card, i) => (
                    <div key={card.title} className={`p-10 ${i !== 0 ? 'border-t md:border-t-0 md:border-l border-brandBorder' : ''}`}>
                      <p className="text-lg font-bold text-mainText mb-3">{card.title}</p>
                      <p className={smallBody}>{card.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      ) : hasRimonSections ? (
        <>
          {rimon && (
            <>
              {/* THE PROBLEM */}
              <section className="w-full py-16 px-6 md:px-[60px]">
                <div className="max-w-[1100px] mx-auto">
                  <p className={eyebrow}>{rimon.problem.label}</p>
                  <h2 className={sectionTitle}>{rimon.problem.title}</h2>
                  <p className={`${bodyText} mb-8`}>{rimon.problem.intro}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="bg-white rounded-[30px] shadow-[0_5px_6px_rgba(0,0,0,0.11)] p-8">
                      <p className={cardLabel}>Reasons</p>
                      <ul className="flex flex-col gap-2.5 mt-2">
                        {rimon.problem.reasons.map((r) => (
                          <li key={r} className="flex gap-3 text-sm text-muted leading-[1.7]">
                            <span className="w-1.5 h-1.5 rounded-full bg-brandOrange shrink-0 mt-[7px] opacity-70" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white rounded-[30px] shadow-[0_5px_6px_rgba(0,0,0,0.11)] p-8">
                      <p className={cardLabel}>Implications</p>
                      <ul className="flex flex-col gap-2.5 mt-2">
                        {rimon.problem.implications.map((r) => (
                          <li key={r} className="flex gap-3 text-sm text-mainText leading-[1.7]">
                            <span className="w-1.5 h-1.5 rounded-full bg-brandOrange shrink-0 mt-[7px] opacity-70" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-2">
                      <p className={cardLabel}>Interviews</p>
                      <h3 className={subHeading}>{rimon.problem.interviews.title}</h3>
                      <p className={bodyText}>{rimon.problem.interviews.body}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* RESEARCH INSIGHTS */}
              <section className="w-full bg-white py-16 px-6 md:px-[60px]">
                <div className="max-w-[1100px] mx-auto">
                  <p className={eyebrow}>{rimon.researchInsights.label}</p>
                  <h2 className={sectionTitle}>{rimon.researchInsights.title}</h2>
                  <p className={`${bodyText} mb-10`}>{rimon.researchInsights.body}</p>
                  <h3 className={subHeading}>What Values and Needs Matter Most</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                    {rimon.researchInsights.values.map((v) => (
                      <div key={v.title} className="bg-cream rounded-[30px] shadow-[0_5px_6px_rgba(0,0,0,0.11)] p-6">
                        <p className={cardTitle}>{v.title}</p>
                        <p className={smallBody}>{v.body}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-cream rounded-[30px] shadow-[0_5px_6px_rgba(0,0,0,0.11)] p-8">
                    <p className={cardLabel}>Conclusions and Recommendations</p>
                    <ul className="flex flex-col gap-2.5 mt-2">
                      {rimon.researchInsights.conclusions.map((c) => (
                        <li key={c} className="flex gap-3 text-sm text-muted leading-[1.7]">
                          <span className="w-1.5 h-1.5 rounded-full bg-brandOrange shrink-0 mt-[7px] opacity-70" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* TARGET AUDIENCE */}
              <section className="w-full py-16 px-6 md:px-[60px]">
                <div className="max-w-[1100px] mx-auto">
                  <p className={eyebrow}>{rimon.targetAudience.label}</p>
                  <h2 className={sectionTitle}>{rimon.targetAudience.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div className="bg-white rounded-[30px] shadow-[0_5px_6px_rgba(0,0,0,0.11)] overflow-hidden">
                      <img src="/images/rimon/rimonTargetDesktop.jpg" alt="Rimon primary target audience" className="w-full block md:hidden" loading="lazy" />
                      <div className="p-8">
                        <p className={cardLabel}>Primary Target</p>
                        <p className={smallBody}>{rimon.targetAudience.primaryTarget}</p>
                      </div>
                      <div className="hidden md:block px-8 pb-8">
                        <div className="rounded-[16px] overflow-hidden aspect-[16/10]">
                          <img src="/images/rimon/rimonTargetDesktop.jpg" alt="Rimon primary target audience" className="w-full h-full object-cover block" loading="lazy" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      {rimon.targetAudience.stats.map((s) => (
                        <div key={s.number} className="bg-white rounded-[30px] shadow-[0_5px_6px_rgba(0,0,0,0.11)] p-8">
                          <p className="text-[42px] font-black tracking-tight text-brandOrange leading-[1] mb-2">{s.number}</p>
                          <p className={smallBody}>{s.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-[30px] shadow-[0_5px_6px_rgba(0,0,0,0.11)] p-8 mb-5">
                    <p className={cardLabel}>Main Challenges</p>
                    <ul className="flex flex-col gap-2.5 mt-2">
                      {rimon.targetAudience.mainChallenges.map((c) => (
                        <li key={c} className="flex gap-3 text-sm text-mainText leading-[1.7]">
                          <span className="w-1.5 h-1.5 rounded-full bg-brandOrange shrink-0 mt-[7px] opacity-70" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* CORE VALUES & GOAL */}
              <section className="w-full bg-white py-16 px-6 md:px-[60px]">
                <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className={eyebrow}>Core Values</p>
                    <p className={`${subHeading} mb-4`}>{rimon.targetAudience.coreValues.headline}</p>
                    <ul className="flex flex-col gap-3 mt-2">
                      {rimon.targetAudience.coreValues.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-base text-muted leading-[1.7]">
                          <span className="w-1.5 h-1.5 rounded-full bg-brandOrange shrink-0 mt-[10px] opacity-70" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className={eyebrow}>Goal</p>
                    <p className="text-xl md:text-2xl font-semibold text-mainText leading-[1.6]">{rimon.targetAudience.goal}</p>
                  </div>
                </div>
              </section>

              {/* SUCCESS METRICS */}
              <section className="w-full bg-[#F5F5F5] py-16 px-6 md:px-[60px]">
                <div className="max-w-[1100px] mx-auto">
                  <p className={eyebrow}>{rimon.successMetrics.label}</p>
                  <h2 className={sectionTitle}>{rimon.successMetrics.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="bg-white rounded-[30px] shadow-[0_5px_6px_rgba(0,0,0,0.11)] p-8">
                      <p className={cardLabel}>Initial Metrics</p>
                      <ul className="flex flex-col gap-2.5 mt-2">
                        {rimon.successMetrics.initial.map((m) => (
                          <li key={m} className="flex gap-3 text-sm text-muted leading-[1.7]">
                            <span className="w-1.5 h-1.5 rounded-full bg-brandOrange shrink-0 mt-[7px] opacity-70" />
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white rounded-[30px] shadow-[0_5px_6px_rgba(0,0,0,0.11)] p-8">
                      <p className={cardLabel}>Advanced Metrics</p>
                      <ul className="flex flex-col gap-2.5 mt-2">
                        {rimon.successMetrics.advanced.map((m) => (
                          <li key={m} className="flex gap-3 text-sm text-mainText leading-[1.7]">
                            <span className="w-1.5 h-1.5 rounded-full bg-brandOrange shrink-0 mt-[7px] opacity-70" />
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* KEY SCREENS */}
              <section className="w-full bg-white py-16 px-6 md:px-[60px]">
                <div className="max-w-[1100px] mx-auto">
                  <p className={eyebrow}>{rimon.keyScreens.label}</p>
                  <h2 className={sectionTitle}>{rimon.keyScreens.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {rimon.keyScreens.screens.map((s) => (
                      <div key={s.label} className="max-w-[240px] mx-auto w-full">
                        <div className="bg-white rounded-[16px] md:rounded-[30px] shadow-[0_5px_6px_rgba(0,0,0,0.11)] overflow-hidden">
                          {s.image ? (
                            <img src={s.image} alt={s.imageAlt ?? s.label} className="w-full block" loading="lazy" />
                          ) : (
                            <div className="aspect-[9/16] flex items-center justify-center">
                              <ImagePlaceholder minHeight="min-h-full" />
                            </div>
                          )}
                        </div>
                        <p className="text-sm font-semibold text-muted text-center mt-3.5">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* BUSINESS MODEL */}
              <section className="w-full py-16 px-6 md:px-[60px]">
                <div className="max-w-[1100px] mx-auto">
                  <p className={eyebrow}>{rimon.businessModel.label}</p>
                  <h2 className={sectionTitle}>{rimon.businessModel.title}</h2>
                  <div className="bg-white rounded-[30px] shadow-[0_5px_6px_rgba(0,0,0,0.11)] p-8">
                    <p className={bodyText}>{rimon.businessModel.body}</p>
                  </div>
                </div>
              </section>

              {/* ROADMAP */}
              <section className="w-full bg-white py-16 px-6 md:px-[60px]">
                <div className="max-w-[1100px] mx-auto">
                  <p className={eyebrow}>{rimon.roadmap.label}</p>
                  <h2 className={sectionTitle}>{rimon.roadmap.title}</h2>
                  <div className="flex flex-col gap-4 mt-8">
                    {rimon.roadmap.items.map((item) => (
                      <div key={item.title} className="flex flex-col sm:flex-row sm:items-center gap-5 bg-cream rounded-[30px] shadow-[0_5px_6px_rgba(0,0,0,0.11)] px-7 py-6">
                        <div className="flex items-center gap-5">
                          <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center shrink-0">
                            {item.icon === 'money' ? (
                              <svg className="w-5 h-5 stroke-brandOrange fill-none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M23 4v6h-6" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5 stroke-brandOrange fill-none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                              </svg>
                            )}
                          </div>
                          <span className="sm:hidden text-sm font-bold tracking-widest uppercase text-brandOrange bg-white px-3.5 py-1.5 rounded-full whitespace-nowrap">{item.badge}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base font-bold text-mainText mb-1">{item.title}</h4>
                          <p className={smallBody}>{item.body}</p>
                        </div>
                        <span className="hidden sm:inline-block text-sm font-bold tracking-widest uppercase text-brandOrange bg-white px-3.5 py-1.5 rounded-full whitespace-nowrap">{item.badge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}
        </>
      ) : (
        <>
          {/* ACADEMIX - Problem */}
          {problem && (
            <section className="w-full py-16 px-6 md:px-[60px]">
              <div className="max-w-[700px] mx-auto">
                <SectionHeader label={problem.label} title={problem.title} />
                {problem.body && <p className={bodyText}>{problem.body}</p>}
              </div>
            </section>
          )}

          {/* ACADEMIX - Causes */}
          {causes && (
            <section className="w-full bg-white py-16 px-6 md:px-[60px]">
              <div className="max-w-[700px] mx-auto">
                <SectionHeader label={causes.label} title={causes.title} />
                <ul className="flex flex-col gap-4 mt-5 list-none">
                  {causes.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="mt-2 w-2 h-2 rounded-full bg-brandOrange shrink-0" />
                      <p className={bodyText}>{b}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 px-6 py-4 rounded-[16px] bg-brandOrange/10 border border-brandOrange/20">
                  <p className="text-base font-semibold text-brandOrange">The Result:</p>
                  <p className={bodyText}>{causes.result}</p>
                </div>
              </div>
            </section>
          )}

          {/* ACADEMIX - Target Audience */}
          {targetAudience && (
            <section className="w-full py-16 px-6 md:px-[60px]">
              <div className="max-w-[700px] mx-auto">
                <SectionHeader label={targetAudience.label} title={targetAudience.title} />
                <div className="flex flex-col gap-5 mt-6">
                  {targetAudience.groups.map((g, i) => (
                    <div key={i} className="bg-white rounded-[20px] shadow-[0_5px_6px_rgba(0,0,0,0.08)] px-7 py-6">
                      <h4 className="text-base font-bold text-mainText mb-2">{g.title}</h4>
                      <p className={smallBody}>{g.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ACADEMIX - Market Research */}
          {marketResearch && (
            <section className="w-full bg-white py-16 px-6 md:px-[60px]">
              <div className="max-w-[700px] mx-auto">
                <SectionHeader label={marketResearch.label} title={marketResearch.title} />
                <div className="flex flex-col gap-6 mt-6">
                  {marketResearch.findings.map((f) => (
                    <div key={f.number} className="flex gap-5 items-start">
                      <span className="text-[28px] font-black text-brandOrange/30 leading-none shrink-0 w-10">{f.number}</span>
                      <div>
                        <h4 className="text-base font-bold text-mainText mb-1">{f.title}</h4>
                        <p className={smallBody}>{f.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ACADEMIX - Solution */}
          {solution && (
            <section className="w-full py-16 px-6 md:px-[60px]">
              <div className="max-w-[700px] mx-auto">
                <p className={eyebrow}>{solution.label}</p>
                <p className="text-[22px] md:text-[26px] font-bold text-mainText leading-[1.6] whitespace-pre-line">{solution.body}</p>
              </div>
            </section>
          )}

          {/* ACADEMIX - The Value */}
          {solution && (
            <section className="w-full bg-white py-16 px-6 md:px-[60px]">
              <div className="max-w-[700px] mx-auto">
                <p className="text-lg font-bold text-mainText mb-4">{solution.valueLabel}</p>
                <ul className="flex flex-col gap-3">
                  {solution.values.map((v, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="mt-2 w-2 h-2 rounded-full bg-brandOrange shrink-0" />
                      <p className={bodyText}>{v}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* ACADEMIX - Architecture */}
          <section className="w-full bg-cream py-16 px-6 md:px-[60px]">
            <div className="max-w-[1100px] mx-auto">
              <ArchitectureSection data={architecture} />
            </div>
          </section>

          {/* ACADEMIX - Key Features */}
          <section className="w-full bg-white py-16 px-6 md:px-[60px]">
            <div className="max-w-[1100px] mx-auto">
              <SectionHeader label={keyFeatures.label} title={keyFeatures.title} />
              {keyFeatures.screens.map((screen, i) => (
                <FeatureBlock key={screen.number} screen={screen} isFirst={i === 0} />
              ))}
            </div>
          </section>

        </>
      )}

      {/* FOOTER NAV */}
      <nav className="bg-cream px-6 md:px-[60px] py-6 md:py-10 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between mt-auto border-b border-brandBorder">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brandOrange no-underline hover:opacity-70 transition-opacity whitespace-nowrap"
        >
          <ChevronIcon direction="left" />
          All Projects
        </Link>
        <div className="flex items-center gap-3 md:gap-6">
          {footerNav.prev && (
            <Link
              to={footerNav.prev.href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brandOrange no-underline hover:opacity-70 transition-opacity border-r border-brandBorder pr-3 md:pr-6 whitespace-nowrap"
            >
              <ChevronIcon direction="left" />
              {footerNav.prev.label}
            </Link>
          )}
          {footerNav.next && (
            <Link
              to={footerNav.next.href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brandOrange no-underline hover:opacity-70 transition-opacity whitespace-nowrap"
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
        <svg viewBox="0 0 24 24" fill="white" className="w-[30px] h-[30px]">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
