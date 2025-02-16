import "./../styles.css";
import { TrackedGame } from "@/components/TrackedGame";

const data = await fetch("http://localhost:8080/review/reviews", {
  cache: "no-store",
});
const games = await data.json();
console.log("data will be shown below");
console.log(games);

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center">
      <div className="flex w-full flex-col items-center px-4 2xl:max-w-screen-2xl">
        <TrackedGame />
        <TrackedGame />
      </div>
    </div>
  );
}
