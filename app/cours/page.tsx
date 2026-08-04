import Calendar from "../evenements/components/Calendar";
import HeroCours from "./components/HeroCours";
import Tarif from "./components/Tarif";

export default function Cours() {
  return (
    <div className="min-h-screen">
      <HeroCours />

      <Tarif />

      <Calendar />
    </div>
  );
}
