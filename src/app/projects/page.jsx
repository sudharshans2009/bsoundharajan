import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { projects } from "@/config/projects";

export default function Home() {
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
            {projects.map(({ title, funding, completed }, index) => !completed &&(
              <TableRow key={index}>
                <TableCell>{title}</TableCell>
                <TableCell>{funding}</TableCell>
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
            {projects.map(({ title, funding, completed }, index) => completed &&(
              <TableRow key={index}>
                <TableCell>{title}</TableCell>
                <TableCell>{funding}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}