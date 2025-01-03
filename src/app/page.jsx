import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { formatDatabase, queryDatabase } from "@/lib/notion";
import { formatText } from "@/lib/utils";
import { AtSign, GraduationCap } from "lucide-react";

export const dynamic = 'force-dynamic';

function CarouselImage({ src, alt }) {
  return <Image src={src} width={256} height={256} alt={alt} className="w-full opacity-80 hover:opacity-100 transition-all" />
}

export default async function Hero() {
  const rawDatabase = await queryDatabase("gallery");
  const database = await formatDatabase(rawDatabase).sort((a, b) => a.Order - b.Order);

  return (
    <>
      <div className="mt-20 w-full max-w-5xl mx-auto p-5 flex gap-10 lg:flex-row flex-col-reverse">
        <div className="flex-1">
          <h1 className="font-semibold text-[40px] text-maincolor underline">Dr. B. Soundharajan</h1>
          <p className="max-w-lg mt-10">Associate Professor, Department of Civil Engineering, School of Engineering, Coimbatore | Visiting Faculty, School of Agricultural Sciences, Coimbatore</p>
          <p className="max-w-lg mt-10"><span className="font-semibold border-b border-white hover:border-maincolor transition-all cursor-pointer">Qualifications:</span> BE, ME, PhD</p>
          <p className="mt-1 border-b border-maincolor hover:border-white transition-all w-max border-dashed"><Link href="mailto:b_soundharajan@cb.amrita.edu"><AtSign width={20} height={20} className="inline-flex" /> b_soundharajan@cb.amrita.edu</Link></p>
          <p className="mt-1 border-b border-maincolor hover:border-white transition-all w-max border-dashed"><Link href="https://scholar.google.com/citations?user=JZPxTIoAAAAJ&hl=en"><GraduationCap width={20} height={20} className="inline-flex" /> Google Scholar</Link></p>
          <p className="max-w-lg mt-10"><span className="font-semibold border-b border-white hover:border-maincolor transition-all cursor-pointer">Research Interest:</span> Analysis, Assessment of Climate Change Impacts on Water Resources, Irrigation Water Management, Planning and Management of Water Resources Systems, Urban Water Systems, Water-Energy-Food Nexus</p>
        </div>
        <div className="flex-1 flex lg:justify-end">
          <Image alt="bsoundharajan" src="/b-soundharajan.jpg" width={512} height={512} className=" lg:w-[384px] h-[384px] rounded-[10px] object-cover" />
        </div>
      </div>
      <div className="mt-20 w-full max-w-5xl mx-auto p-5">
        <h1 className="font-semibold text-[20px] text-maincolor mb-5">Gallery</h1>
        <Carousel
          opts={{
            align: "start",
          }}
          className="mx-10"
        >
          <CarouselPrevious />
          <CarouselContent>
            {database.map(({ Title, Image }, index) => { 
              return (
              <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
                <div className="border relative group cursor-pointer">
                  <CarouselImage src={Image[0].file.url} alt={formatText(Title)} />
                  <span className="text-3xl font-semibold absolute z-10 bottom-5 left-5 right-5 group-hover:opacity-100 opacity-0 transition-all flex justify-center">
                    <div className="rounded-[10px] bg-white p-1">{formatText(Title)}</div>
                  </span>
                </div>
              </CarouselItem>
            )})}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}