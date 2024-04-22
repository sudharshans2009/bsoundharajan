import { conferencePapers, journalArticles } from "@/config/publications";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Publications() {
  return (
    <>
      <div className=" w-full max-w-5xl mx-auto p-5">
        <div className="w-full flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3 w-full lg:sticky top-0 h-max pt-20">
            <div className="p-5 flex flex-col gap-5 border border-amrita rounded-[10px] text-amrita bg-white">
              <h1 className="font-semibold text-[20px] border-b border-amrita transition-all cursor-pointer">
                <Link href="#journal-articles">Journal Article</Link>
              </h1>
              <h1 className="font-semibold text-[20px] border-b border-amrita transition-all cursor-pointer">
                <Link href="#conference-papers">Conference Paper</Link>
              </h1>
            </div>
          </div>
          <div className="lg:w-2/3 w-full flex flex-col gap-5">
            <div className="pt-20 -mb-10"  id="journal-articles">
              <div className="p-5 flex flex-col border border-amrita rounded-[10px] text-amrita">
                <h1 className="font-semibold text-[20px] border-b border-amrita transition-all cursor-pointer">Journal Article</h1>
                {journalArticles.map((article, index) => (
                  <div key={index} className={cn("flex flex-col border-amrita py-5", journalArticles.length !== index + 1 && "border-b")}>
                    <p className="text-gray-800"><span className="font-semibold">Year:</span> {article.year}</p>
                    <p className="font-semibold cursor-pointer">{article.title}</p>
                    {(article?.cite || article?.publisher) && <br />}
                    {article?.cite && <p className="text-gray-800"><span className="font-semibold">Cite this Research Publication:</span> {article?.cite}</p>}
                    {article?.publisher && <p className="text-gray-800"><span className="font-semibold">Publisher:</span> {article?.publisher}</p>}
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-20" id="conference-papers">
              <div className="p-5 flex flex-col border border-amrita rounded-[10px] text-amrita">
                <h1 className="font-semibold text-[20px] border-b border-amrita transition-all cursor-pointer">Conference Paper</h1>
                {conferencePapers.map((article, index) => (
                  <div key={index} className={cn("flex flex-col border-amrita py-5", conferencePapers.length !== index + 1 && "border-b")}>
                    <p className="text-gray-800"><span className="font-semibold">Year:</span> {article.year}</p>
                    <p className="font-semibold cursor-pointer">{article.title}</p>
                    {(article?.cite || article?.publisher) && <br />}
                    {article?.cite && <p className="text-gray-800"><span className="font-semibold">Cite this Research Publication:</span> {article?.cite}</p>}
                    {article?.publisher && <p className="text-gray-800"><span className="font-semibold">Publisher:</span> {article?.publisher}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}