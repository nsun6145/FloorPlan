import Bedroom1 from "./BedRoom1";
import Bedroom2 from "./Bedroom2";
import Bedroom3 from "./Bedroom3";
import FullBath from "./FullBath";
import HalfBath from "./HalfBath";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

const FloorPlan = () => {
  return (
    <div>
      <Bedroom1 />
      <Kitchen />
      <LivingRoom />
      <FullBath />
      <Bedroom2 />
      <HalfBath />
      <Bedroom3 />
    </div>
  );
};

export default FloorPlan;
