interface SectionHeaderProps {
  label: string;
  title: string;
  titleClassName?: string;
  showTitleArrow?: boolean;
}

export default function SectionHeader({ label, title, titleClassName, showTitleArrow }: SectionHeaderProps) {
  return (
    <>
      {label !== title && (
        <p className="text-base font-bold tracking-widest uppercase text-brandOrange mb-3">{label}</p>
      )}
      <h2 className={titleClassName ?? 'text-[30px] lg:text-[46px] font-extrabold tracking-tight text-mainText mb-5 leading-tight'}>
        {title}
        {showTitleArrow && (
          <svg className="hidden md:inline-block w-16 lg:w-24 h-4 lg:h-5 ml-4 stroke-brandOrange fill-none align-middle" viewBox="0 0 100 20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 10h80" />
            <path d="M70 2l14 8-14 8" />
          </svg>
        )}
      </h2>
    </>
  );
}
