import { formatDatabase, queryDatabase } from "@/lib/notion";
import { cn, formatText } from "@/lib/utils";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function Publications() {  
  const rawDatabase = await queryDatabase("publications");
  const database = await formatDatabase(rawDatabase);
  const conferencePapers = database.filter(({ Type }) => Type.name === "Conference Papers").sort((a, b) => b.Order - a.Order);
  const journalArticles = database.filter(({ Type }) => Type.name === "Journal Articles").sort((a, b) => b.Order - a.Order);

  return (
    <>
      <div className=" w-full max-w-5xl mx-auto p-5">
        <div className="w-full flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3 w-full lg:sticky top-0 h-max pt-20">
            <div className="p-5 flex flex-col gap-5 border text-maincolor bg-white">
              <h1 className="font-semibold text-[20px] border-b transition-all cursor-pointer">
                <Link href="#journal-articles">Journal Article</Link>
              </h1>
              <h1 className="font-semibold text-[20px] border-b transition-all cursor-pointer">
                <Link href="#conference-papers">Conference Paper</Link>
              </h1>
            </div>
          </div>
          <div className="lg:w-2/3 w-full flex flex-col gap-5">
            <div className="pt-20 -mb-10"  id="journal-articles">
              <div className="p-5 flex flex-col border text-maincolor">
                <h1 className="font-semibold text-[20px] border-b transition-all cursor-pointer">Journal Article</h1>
                {journalArticles.map((article, index) => (
                  <div key={index} className={cn("flex flex-col py-5", journalArticles.length !== index + 1 && "border-b")}>
                    <p className="text-gray-800"><span className="font-semibold">Year:</span> {formatText(article.Date)}</p>
                    <p className="font-semibold cursor-pointer">{formatText(article.Title, { underline: false })}</p>
                    {(article?.Cite.length > 0 || article?.Publisher.length > 0) && <br />}
                    {article?.Cite.length > 0 && <p className="text-gray-800"><span className="font-semibold">Cite this Research Publication:</span> {formatText(article?.Cite)}</p>}
                    {article?.Publisher.length > 0 && <p className="text-gray-800"><span className="font-semibold">Publisher:</span> {formatText(article?.Publisher)}</p>}
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-20" id="conference-papers">
              <div className="p-5 flex flex-col border text-maincolor">
                <h1 className="font-semibold text-[20px] border-b transition-all cursor-pointer">Conference Paper</h1>
                {conferencePapers.map((article, index) => (
                  <div key={index} className={cn("flex flex-col py-5", journalArticles.length !== index + 1 && "border-b")}>
                    <p className="text-gray-800"><span className="font-semibold">Year:</span> {formatText(article.Date)}</p>
                    <p className="font-semibold cursor-pointer">{formatText(article.Title, { linkUnderline: false })}</p>
                    {(article?.Cite.length > 0 || article?.Publisher.length > 0) && <br />}
                    {article?.Cite.length > 0 && <p className="text-gray-800"><span className="font-semibold">Cite this Research Publication:</span> {formatText(article?.Cite)}</p>}
                    {article?.Publisher.length > 0 && <p className="text-gray-800"><span className="font-semibold">Publisher:</span> {formatText(article?.Publisher)}</p>}
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