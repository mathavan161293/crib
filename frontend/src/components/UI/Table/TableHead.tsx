interface TableHeadProps {
  name: string;
}

export default function TableHead({ name }: TableHeadProps) {
  return (
    <th
      className={`px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase`}
    >
      {name}
    </th>
  );
}
