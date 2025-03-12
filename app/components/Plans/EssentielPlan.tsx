export default function EssentielPlan() {
  return(
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
              <div className="relative w-[163px] h-[61px]">
                <span
                  className="absolute text-[48px] font-medium leading-none text-white"
                  style={{
                    top: 0,
                    left: 0,
                    letterSpacing: "-0.77px",
                  }}
                >
                  $179
                </span>
                <span
                  className="absolute text-[16px] font-medium leading-none text-white"
                  style={{
                    top: "24px",
                    left: "105px",
                    letterSpacing: "-0.77px",
                  }}
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
            <div className="flex items-center w-[328px] h-[23px] gap-[12px]">
              <div className="relative w-[21.57px] h-[21.57px] rounded-[4.31px]">
                <div
                  className="absolute"
                  style={{
                    width: "16px",
                    height: "12px",
                    top: "4px",
                    left: "6px",
                  }}
                >
                  <img
                    src="/vector-check.png"
                    alt="check"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <p className="text-white text-[18px] font-normal leading-none">
                +2500 vues/mois
              </p>
            </div>

            <div className="flex items-center w-[328px] h-[23px] gap-[12px]">
              <div className="relative w-[21.57px] h-[21.57px] rounded-[4.31px]">
                <div
                  className="absolute"
                  style={{
                    width: "16px",
                    height: "12px",
                    top: "4px",
                    left: "6px",
                  }}
                >
                  <img
                    src="/vector-check.png"
                    alt="check"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <p className="text-white text-[18px] font-normal leading-none">
                +60 clics sur votre site
              </p>
            </div>

            <div className="flex items-center w-[328px] h-[23px] gap-[12px]">
              <div className="relative w-[21.57px] h-[21.57px] rounded-[4.31px]">
                <div
                  className="absolute"
                  style={{
                    width: "16px",
                    height: "12px",
                    top: "4px",
                    left: "6px",
                  }}
                >
                  <img
                    src="/vector-check.png"
                    alt="check"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <p className="text-white text-[18px] font-normal leading-none">
                +15 appels/mois
              </p>
            </div>

            <div className="flex items-center w-[328px] h-[23px] gap-[12px]">
              <div className="relative w-[21.57px] h-[21.57px] rounded-[4.31px]">
                <div
                  className="absolute"
                  style={{
                    width: "16px",
                    height: "12px",
                    top: "4px",
                    left: "6px",
                  }}
                >
                  <img
                    src="/vector-check.png"
                    alt="check"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <p className="text-white text-[18px] font-normal leading-none">
                +15 demandes d'itinéraires
              </p>
            </div>

            <div className="flex items-center w-[328px] h-[23px] gap-[12px]">
              <div className="relative w-[21.57px] h-[21.57px] rounded-[4.31px]">
                <div
                  className="absolute"
                  style={{
                    width: "16px",
                    height: "12px",
                    top: "4px",
                    left: "6px",
                  }}
                >
                  <img
                    src="/vector-check.png"
                    alt="check"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <p className="text-white text-[18px] font-normal leading-none">
                Plus de visibilité sur Google
              </p>
            </div>

            <div className="flex items-center w-[328px] h-[23px]">
              <p className="text-white text-[18px] font-normal leading-none">
                Réponse aux avis google inclus
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-[328px] h-[45px] rounded-[12px] border-[0.77px] border-white flex items-center justify-center mt-4"
          style={{ paddingTop: "16px", paddingBottom: "16px" }}
        >
          <p
            className="text-white text-[18px] font-normal leading-none"
            style={{ letterSpacing: "0" }}
          >
            Je m'abonne
          </p>
        </div>
      </div>
  )
}