import { experience, education } from "@/config/main";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Bio() {
  return (
    <>
      <div className="mt-20 w-full max-w-5xl mx-auto p-5">
        Dr. B. Soundharajan joined the Amrita in 2018 after his Post-Doctoral research at the Heriot-Watt University, UK. Dr. B. Soundharajan completed his PhD in Water Resources Engineering at Indian Institute of Technology Madras. His research focuses on the analysis, planning and management of water resources systems; understanding the behaviour of water supply reservoirs and the development of effective reservoir management and planning tools; Water-Energy-Food Nexus; and Urban Water Systems. Dr. B. Soundharajan has more than 10 years of research and teaching experience.
      </div>
      <div className="mt-20 w-full max-w-5xl mx-auto p-5">
        <Table className="border">
          <TableHeader>
            <TableRow className="w-full">
              <TableHead className="text-amrita font-semibold">Experience</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {experience.map(({ time, position, university }, index) => (
              <TableRow key={index}>
                <TableCell>{time}</TableCell>
                <TableCell>{position}{index === 0 && <> <span className="font-semibold text-amrita border-b border-white hover:border-amrita transition-all cursor-pointer">(Current)</span></>}</TableCell>
                <TableCell>{university}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-20 w-full max-w-5xl mx-auto p-5">
        <Table className="border">
          <TableHeader>
            <TableRow className="w-full">
              <TableHead className="text-amrita font-semibold">Education</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {education.map(({ education, university, time }) => (
              <TableRow key={index}>
                <TableCell>{education}</TableCell>
                <TableCell>{university}</TableCell>
                <TableCell>{time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}