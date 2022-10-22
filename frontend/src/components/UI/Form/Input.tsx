interface InputProps {
  label: string;
  name: string;
  type?: string;
  onChange?: () => void;
  value: string;
  error: string;
}

export default function Input({
  label,
  name,
  type,
  onChange,
  value,
  error,
}: InputProps) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-medium mb-2">
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type ? type : "text"}
        name={name}
        value={value}
        placeholder={label}
        onChange={onChange}
      />
      {error !== "" && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
}
