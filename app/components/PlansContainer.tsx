export default function PlansContainer() {
  return (
    <div className="flex items-start gap-[32px] w-[1251px] h-[654px]">
      {/* Plan Essentiel */}
      <div
        className="w-[392px] h-[575px] rounded-[24px] border border-[#E7EBFF] p-[32px] flex flex-col items-center"
        style={{
          background:
            "radial-gradient(129.76% 100% at 50.04% 100%, rgba(3,25,83,0.7) 0%, rgba(24,116,255,0.7) 100%)",
        }}
      >
        <div className="flex flex-col w-[328px] h-[434px] gap-[24px]">
          <div className="flex flex-col w-[328px] h-[168px] gap-[14px]">
            <div
              className="relative w-[40px] h-[40px] bg-[#0959E5] rounded-[10.79px] overflow-hidden"
              style={{
                backgroundImage: "url('/pattern_arrow.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
            >
              <div
                className="absolute w-[24.65px] h-[24.65px]"
                style={{ top: "7.24px", left: "7.24px" }}
              >
                <div
                  className="absolute w-[20px] h-[20px]"
                  style={{ top: "3.08px", left: "3.08px" }}
                >
                  <img
                    src="/bullseye-arrow.svg"
                    alt="bullseye-arrow"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[328px] h-[114px] gap-[12px]">
              <p className="w-[328px] h-[41px] text-[32px] font-medium leading-[100%] tracking-[-1px] text-white">
                Essentiel
              </p>
              <div className="w-[163px] h-[61px] flex items-end">
                <span
                  className="text-[48px] font-medium leading-none text-white"
                  style={{ letterSpacing: "-0.77px" }}
                >
                  $179
                </span>
                <span
                  className="ml-2 text-[16px] font-medium leading-none text-white"
                  style={{ letterSpacing: "-0.77px" }}
                >
                  / month
                </span>
              </div>
            </div>
          </div>

          <div
            className="w-[328px] border-[0.77px] border-transparent"
            style={{
              borderImage:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 48.8%, rgba(255,255,255,0) 100%) 1",
            }}
          />

          <div className="flex flex-col w-[328px] h-[218px] gap-[16px]">
            {/* list content */}
          </div>
        </div>
        <div
          className="w-[328px] h-[45px] rounded-[12px] border-[0.77px] border-white flex items-center justify-center mt-4"
          style={{ paddingTop: "16px", paddingBottom: "16px" }}
        >
          {/* Bouton "Je m'abonne" */}
        </div>
      </div>

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
