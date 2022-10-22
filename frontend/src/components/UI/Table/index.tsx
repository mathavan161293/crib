import { Crib } from "../../../interface/crib";
import Badge from "../Badge/Badge";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

interface TableProps {
  cribs: Crib[];
  search: string;
  handleEdit: any;
  handleDelete: any;
}

export default function Table({
  cribs,
  search,
  handleEdit,
  handleDelete,
}: TableProps) {
  const cribsFilter = cribs?.filter((crib: Crib) =>
    crib.name.toLowerCase().includes(search.toLowerCase())
  );
  cribsFilter.reverse();

  return (
    <div className="p-1.5 w-full inline-block align-middle">
      <div className="overflow-hidden border bg-white rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {["Id", "Name", "Image", "Location", "Edit", "Delete"].map(
                (name: string, i: number) => (
                  <TableHead key={i} name={name} />
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {cribsFilter?.map((crib: Crib, i: number) => (
              <tr key={i}>
                <TableBody name={String(crib.id)} />
                <TableBody name={crib.name} />
                <TableBody>
                  <img src={crib.img} alt="" className="h-14" />
                </TableBody>
                <TableBody name={crib.location} />
                <TableBody>
                  <Badge
                    name="Edit"
                    className="bg-blue-500"
                    onClick={() => handleEdit(crib)}
                  />
                </TableBody>
                <TableBody>
                  <Badge name="Delete" onClick={() => handleDelete(crib.id)} />
                </TableBody>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
