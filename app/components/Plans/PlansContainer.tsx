import EssentielPlan from "./EssentielPlan";
import UltimePlan from "./UltimePlan";
import PremiumPlan from "./PremiumPlan";

export default function PlansContainer() {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-8 justify-center items-start w-full max-w-[1251px] mx-auto">
      <EssentielPlan />
      <UltimePlan />
      <PremiumPlan />
    </div>
  );
}
