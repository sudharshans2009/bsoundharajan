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

export default async function Projects() {
  const rawDatabase = await queryDatabase("projects");
  const database = await formatDatabase(rawDatabase).sort((a, b) => b.Order - a.Order);

  return (
    <>
      <div className="mt-20 w-full max-w-5xl mx-auto p-5">
        <h1 className="font-semibold text-[20px] text-maincolor mb-5">Ongoing Funded Research Projects</h1>
        <Table className="border">
          <TableHeader>
            <TableRow className="w-full">
              <TableHead className="text-maincolor font-semibold">Title of the Project</TableHead>
              <TableHead className="text-maincolor font-semibold w-[220px]">Funding</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {database.map(({ Title, Funding, Completed }, index) => !Completed &&(
              <TableRow key={index}>
                <TableCell>{formatText(Title, { bold: false, linkUnderline: true })}</TableCell>
                <TableCell>{formatText(Funding)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-20 w-full max-w-5xl mx-auto p-5">
      <h1 className="font-semibold text-[20px] text-maincolor mb-5">Completed Projects</h1>
        <Table className="border">
          <TableHeader>
            <TableRow className="w-full">
              <TableHead className="text-maincolor font-semibold">Title</TableHead>
              <TableHead className="text-maincolor font-semibold w-[220px]">Funding</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {database.map(({ Title, Funding, Completed }, index) => Completed &&(
              <TableRow key={index}>
                <TableCell>{formatText(Title, { bold: false, linkUnderline: true })}</TableCell>
                <TableCell>{formatText(Funding)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}