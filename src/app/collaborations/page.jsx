import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDatabase, queryDatabase } from "@/lib/notion";
import { formatText } from "@/lib/utils";

export default async function Collaborations() {
  const rawDatabase = await queryDatabase("collaborations");
  const database = await formatDatabase(rawDatabase).sort((a, b) => b.Order - a.Order);

  return (
    <>
      <div className="mt-20 w-full max-w-5xl mx-auto p-5">
        <Table className="border">
          <TableHeader>
            <TableRow className="w-full">
              <TableHead className="text-maincolor font-semibold">Title of the Project</TableHead>
              <TableHead className="text-maincolor font-semibold w-[250px]">Collaborating Institutions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {database.map(({ Title, Institutions }, index) => (
              <TableRow key={index}>
                <TableCell>{formatText(Title, { bold: false, linkUnderline: true })}</TableCell>
                <TableCell>
                  {Institutions.map(({ name }, index) => (
                    <>
                      <p>{name}</p>
                      {Institutions.length !== index + 1 && <br />}
                    </>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}