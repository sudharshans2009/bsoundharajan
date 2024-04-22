import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { collaborations } from "@/config/collaborations";

export default function Home() {
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
            {collaborations.map(({ title, institutions }, index) => (
              <TableRow key={index}>
                <TableCell>{title}</TableCell>
                <TableCell>
                  {institutions.map((institution, index) => (
                    <>
                      <p>{institution}</p>
                      {institutions.length !== index + 1 && <br />}
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