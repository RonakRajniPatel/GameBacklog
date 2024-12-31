import { Activity } from "@/components/Activity";
import { Featured } from "@/components/Featured";
import "./styles.css";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-full flex-col items-center px-4 2xl:max-w-screen-2xl">
        <Featured />
        <Activity />
        <Activity />
      </div>
    </div>
  );
}
