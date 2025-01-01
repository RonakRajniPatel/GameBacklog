// Define the interface for the props
interface ReviewProps {
  content: string;
  author: string;
  date: string;
  profile: string;
  rating: string;
  platform: string;
}

import Image from "next/image";
export function Review({
  content,
  author,
  date,
  profile,
  rating,
  platform,
}: ReviewProps) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-black bg-slate-500">
      <div className="flex h-full w-full flex-row bg-indigo-500">
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
        <div className="min-h-full w-5/6 bg-cyan-300 md:w-11/12 md:pl-5 md:pt-3">
          <h2>{author}</h2>
          <h2>
            {date} {rating} {platform}
          </h2>
        </div>
      </div>
      <div className="p-2">{content}</div>
    </div>
  );
}
