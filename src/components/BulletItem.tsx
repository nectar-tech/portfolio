interface BulletItemProps {
  title: string;
  body: string;
  icon?: string;
  iconSize?: string;
}

export default function BulletItem({ title, body, icon, iconSize = 'w-16 h-16' }: BulletItemProps) {
  return (
    <li className="flex gap-3.5 text-base text-muted leading-[1.7]">
      {icon ? (
        <img src={icon} alt="" className={`${iconSize} shrink-0 mt-1 object-contain`} />
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-brandOrange shrink-0 mt-2.5" />
      )}
      <div>
        {title && <strong className="text-mainText font-semibold">{title}: </strong>}{body}
      </div>
    </li>
  );
}
