interface BadgeProps {
  name: string;
  className?: string;
  onClick?: () => void;
}

export default function Badge({ name, className, onClick }: BadgeProps) {
  className = className ? className : "bg-red-500";
  return (
    <span
      className={`cursor-pointer inline-flex text-white rounded-full h-6 px-3 justify-center items-center ${className}`}
      onClick={onClick}
    >
      {name}
    </span>
  );
}
