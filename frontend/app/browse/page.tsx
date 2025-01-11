import { Activity } from "@/components/Activity";
import { Featured } from "@/components/Featured";
import "./../styles.css";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex flex-col items-center w-full px-4 2xl:max-w-screen-2xl">
        <Featured />
        <Activity />
        <Activity />
      </div>
    </div>
  );
}
