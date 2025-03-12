import EssentielPlan from "./EssentielPlan";
import PremiumPlan from "./PremiumPlan";

export default function PlansContainer() {
  return (
    <div className="flex items-start gap-[32px] w-[1251px] h-[654px]">
      <EssentielPlan />

      {/* Ultime */}
      <div
        className="
          w-[403px]
          h-[654px]
          rounded-[24px]
          border
          border-[#E7EBFF]
          p-[32px]
        "
        style={{
          backgroundColor: "#A3D7FD",
          backgroundImage: "url('/Pattern.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "0px 0px 45.83px 4.58px #BCCAFF33",
        }}
      ></div>

      <PremiumPlan />
    </div>
  );
}
