import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="mt-20 w-full max-w-5xl mx-auto p-5 flex gap-10 lg:flex-row flex-col-reverse">
      <div className="flex-1">
        <h1 className="font-semibold text-[40px] text-amrita underline">Dr. B. Soundharajan</h1>
        <p className="max-w-lg mt-10">Associate Professor, Department of Civil Engineering, School of Engineering, Coimbatore | Visiting Faculty, School of Agricultural Sciences, Coimbatore</p>
        <p className="max-w-lg mt-10"><span className="font-semibold border-b border-white hover:border-amrita transition-all cursor-pointer">Qualifications:</span> BE, ME, PhD</p>
        <p className="mt-1 border-b border-amrita hover:border-white transition-all w-max border-dashed"><Link href="mailto:b_soundharajan@cb.amrita.edu">b_soundharajan@cb.amrita.edu</Link></p>
        <p className="mt-1 border-b border-amrita hover:border-white transition-all w-max border-dashed"><Link href="https://scholar.google.com/citations?user=JZPxTIoAAAAJ&hl=en">Google Scholar</Link></p>
        <p className="max-w-lg mt-10"><span className="font-semibold border-b border-white hover:border-amrita transition-all cursor-pointer">Research Interest:</span> Analysis, Assessment of Climate Change Impacts on Water Resources, Irrigation Water Management, Planning and Management of Water Resources Systems, Urban Water Systems, Water-Energy-Food Nexus</p>
      </div>
      <div className="flex-1 flex lg:justify-end">
        <Image src="/b-soundharajan.jpg" width={512} height={512} className=" lg:w-[384px] h-[384px] rounded-[20px] object-cover" />
      </div>
    </div>
  );
}