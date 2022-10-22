interface TableBodyProps {
  name?: string;
  children?: any;
}

export default function TableBody({ name, children }: TableBodyProps) {
  return (
    <td className={`px-6 py-4 text-sm text-gray-800 whitespace-nowrap gap-5`}>
      {name && name}
      {children && children}
    </td>
  );
}
