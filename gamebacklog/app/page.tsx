import { Activity } from "@/components/Activity";

export default function Home() {
  return (
    <div>
      <div className="pb-32">
        <Activity/>
      </div>
      <Activity/>
    </div>
  );
}
