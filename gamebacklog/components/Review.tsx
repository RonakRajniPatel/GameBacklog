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
    <div className="flex h-full w-full flex-row rounded-lg border border-black bg-indigo-500">
      <div className="h-full w-1/12 bg-green-500 pl-3">
        <div className="object-scale-down">
          <Image
            src={profile}
            width={1000}
            height={1363}
            alt={author}
            className="aspect-square rounded-full object-cover"
          />
        </div>
      </div>
      <div className="flex h-full w-11/12 bg-red-500"></div>
    </div>
  );
}
