import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { awards, invitedTalks, workshops } from "@/config/awards";

export default function Home() {
  return (
    <>
      <div className="mt-20 w-full max-w-5xl mx-auto p-5">
        <h1 className="font-semibold text-[20px] text-amrita mb-5">Awards</h1>
        <Table className="border">
          {/* <TableHeader>
            <TableRow className="w-full">
              <TableHead className="text-amrita font-semibold">Title</TableHead>
              <TableHead className="text-amrita font-semibold w-[220px]">Funding</TableHead>
            </TableRow>
          </TableHeader> */}
          <TableBody>
            {awards.map(({ year, award, university }, index) => (
              <TableRow>
                <TableCell>{year}</TableCell>
                <TableCell>{award}</TableCell>
                <TableCell>{university}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-20 w-full max-w-5xl mx-auto p-5">
        <h1 className="font-semibold text-[20px] text-amrita mb-5">Invited Talks / Lectures in FDP / Conference / Workshop / Summer School</h1>
        <ul className="flex flex-col gap-5 pl-5 list-disc">
          {invitedTalks.map(talk => (
            <li>{talk}</li>
          ))}
        </ul>
      </div>
      <div className="mt-20 w-full max-w-5xl mx-auto p-5">
        <h1 className="font-semibold text-[20px] text-amrita mb-5">Workshops / Conferences / Webinars Organised / Co-Organised</h1>
        <ul className="flex flex-col gap-5 pl-5 list-disc">
          {workshops.map(talk => (
            <li>{talk}</li>
          ))}
        </ul>
      </div>
    </>
  );
}