// Define the interface for the props
interface ReviewProps {
  content: string;
  author: string;
  date: string;
  profile: string;
}

import Image from "next/image";
export function Review({ content, author, date, profile }: ReviewProps) {
  return (
    <div className="flex h-full w-full flex-row rounded-xl border border-black bg-indigo-500">
      <div className="h-full w-1/6 bg-green-500 md:w-1/12">
        <div className="">
          <Image
            src={profile}
            width={1000}
            height={1363}
            alt={author}
            className="aspect-square rounded-full md:p-2"
          />
        </div>
      </div>
      <div className="flex h-full w-11/12 flex-col bg-red-500">
        <div className="h-2/6 bg-cyan-300">
          {author} reviewed {date}
        </div>
        <div className="bg-rose-300">{content}</div>
      </div>
    </div>
  );
}
