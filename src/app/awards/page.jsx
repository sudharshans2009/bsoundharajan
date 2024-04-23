import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { formatDatabase, queryDatabase } from "@/lib/notion";
import { formatText } from "@/lib/utils";

export default async function Awards() {
  const rawAwardsDatabase = await queryDatabase("awards");
  const awardsDatabase = await formatDatabase(rawAwardsDatabase).sort((a, b) => b.Order - a.Order);
  const rawWorkshopsAndTalksDatabase = await queryDatabase("workshops");
  const workshopsAndTalksDatabase = await formatDatabase(rawWorkshopsAndTalksDatabase);
  const workshopsDatabase = workshopsAndTalksDatabase.filter(({ Type }) => Type.name === "Workshop");
  const talksDatabase = workshopsAndTalksDatabase.filter(({ Type }) => Type.name === "Talk");

  return (
    <>
      <div className="mt-20 w-full max-w-5xl mx-auto p-5">
        <h1 className="font-semibold text-[20px] text-maincolor mb-5">Awards</h1>
        <Table className="border">
          <TableBody>
            {awardsDatabase.map(({ Year, Award, University }, index) => (
              <TableRow key={index}>
                <TableCell>{formatText(Year)}</TableCell>
                <TableCell>{formatText(Award)}</TableCell>
                <TableCell>{formatText(University)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-20 w-full max-w-5xl mx-auto p-5">
        <h1 className="font-semibold text-[20px] text-maincolor mb-5">Invited Talks / Lectures in FDP / Conference / Workshop / Summer School</h1>
        <ul className="flex flex-col gap-5 pl-5 list-disc">
          {workshopsDatabase.map(({ Title }, index) => (
            <li key={index}>{formatText(Title)}</li>
          ))}
        </ul>
      </div>
      <div className="mt-20 w-full max-w-5xl mx-auto p-5">
        <h1 className="font-semibold text-[20px] text-maincolor mb-5">Workshops / Conferences / Webinars Organised / Co-Organised</h1>
        <ul className="flex flex-col gap-5 pl-5 list-disc">
          {workshopsDatabase.map(({ Title }, index) => (
            <li key={index}>{formatText(Title)}</li>
          ))}
        </ul>
      </div>
    </>
  );
}