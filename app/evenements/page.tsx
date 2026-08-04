import Calendar from "./components/Calendar";
import Event from "./components/Event";

export default function Evenements() {
  return (
    <div className="min-h-screen">
      <Event />

      <Calendar />
    </div>
  );
}
