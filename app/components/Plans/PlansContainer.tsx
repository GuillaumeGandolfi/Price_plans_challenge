import EssentielPlan from "./EssentielPlan";

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

      {/* Premium */}
      <div
        className="
          w-[392px]
          h-[614px]
          rounded-[24px]
          border
          border-[#E7EBFF]
          p-[32px]
        "
        style={{
          background:
            "radial-gradient(129.76% 100% at 50.04% 100%, rgba(3,25,83,0.7) 0%, rgba(24,116,255,0.7) 100%)",
        }}
      ></div>
    </div>
  );
}
