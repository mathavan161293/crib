interface TableSearchProps {
  onChange: any;
  search: string;
  setShowModal: any;
}

export default function TableSearch({
  onChange,
  search,
  setShowModal,
}: TableSearchProps) {
  return (
    <div className="flex justify-between py-3 px-2">
      <div className="relative max-w-xs">
        <input
          type="text"
          className="block w-full p-3 pl-10 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
          placeholder="Search..."
          value={search}
          onChange={onChange}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <i className="fas fa-search text-gray-400" />
        </div>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowModal(true)}
      >
        Add Crib
      </button>
    </div>
  );
}
