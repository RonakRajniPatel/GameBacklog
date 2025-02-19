import "./../styles.css";
import { TrackedGame } from "@/components/TrackedGame";

const data = await fetch("http://localhost:8080/review/1", {
  cache: "no-store",
});
const games = await data.json();

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center">
      <div className="flex w-full flex-col items-center px-4 2xl:max-w-screen-2xl">
        <TrackedGame review={games[0]} />
        <TrackedGame review={games[1]} />
      </div>
    </div>
  );
}
