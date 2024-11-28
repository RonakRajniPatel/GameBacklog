import { Activity } from "@/components/Activity";

export default function Home() {
  return (
    <div>
      <Activity/>
      <div className="-mt-28">
        <Activity/>
      </div>
    </div>
  );
}
