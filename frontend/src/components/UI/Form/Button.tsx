interface ButtonProps {
  name: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({ name, className, onClick }: ButtonProps) {
  className = className ? className : "bg-blue-500 hover:bg-blue-700";
  return (
    <button
      className={`text-white font-medium py-2 px-5 rounded focus:outline-none focus:shadow-outline ${className}`}
      type="button"
      onClick={onClick}
    >
      {name}
    </button>
  );
}
