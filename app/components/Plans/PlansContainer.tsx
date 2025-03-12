import EssentielPlan from "./EssentielPlan";
import UltimePlan from "./UltimePlan";
import PremiumPlan from "./PremiumPlan";

export default function PlansContainer() {
  return (
    <div className="flex items-start gap-[32px] w-[1251px] h-[654px]">
      <EssentielPlan />

      <UltimePlan />

      <PremiumPlan />
    </div>
  );
}
