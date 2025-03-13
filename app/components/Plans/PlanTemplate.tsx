import React from "react";

interface PlanTemplateProps {
  width: number;
  height?: number;
  containerClass?: string;
  containerStyle?: React.CSSProperties;

  title: string;
  price: string;
  priceSuffix: string;

  features: string[];

  iconSrc?: string;
  iconBg?: string;
  iconPattern?: string;

  badge?: string;
  badgeBg?: string;

  subscribeButtonBg?: string;
}

export default function PlanTemplate({
  width,
  height,
  containerClass,
  containerStyle,
  title,
  price,
  priceSuffix,
  features,
  iconSrc,
  iconBg,
  iconPattern,
  badge,
  badgeBg = "rgba(255, 255, 255, 0.08)",
  subscribeButtonBg = "transparent",
}: PlanTemplateProps) {
  return (
    <div
      className={`
        flex flex-col items-start
        rounded-[24px]
        border border-[#E7EBFF]
        p-[32px]
        ${containerClass || ""}
      `}
      style={{
        width: "100%",
        maxWidth: width,
        ...containerStyle,
      }}
    >
      {iconSrc && (
        <div
          className="relative w-[40px] h-[40px] rounded-[10.79px] overflow-hidden"
          style={{ backgroundColor: iconBg || "#0959E5" }}
        >
          {iconPattern && (
            <img
              src={iconPattern}
              alt=""
              className="absolute"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "contain",
                top: 0,
                left: 0,
              }}
            />
          )}
          <div
            className="absolute"
            style={{
              top: "7.24px",
              left: "7.24px",
              width: "24.65px",
              height: "24.65px",
            }}
          >
            <div
              className="absolute"
              style={{
                top: "3.08px",
                left: "3.08px",
                width: "20px",
                height: "20px",
              }}
            >
              <img src={iconSrc} alt="plan-icon" className="w-full h-full" />
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 w-full">
        <div className="flex items-center gap-2">
          <p className="text-white text-[32px] font-medium leading-[100%] tracking-[-1px]">
            {title}
          </p>
          {badge && (
            <div
              className="flex items-center justify-center rounded-[6.61px] border border-white"
              style={{
                width: "84px",
                height: "26px",
                padding: "4px 8px",
                backgroundColor: badgeBg,
              }}
            >
              <p className="text-white text-[14px] font-normal leading-none whitespace-nowrap">
                {badge}
              </p>
            </div>
          )}
        </div>

        <div className="relative w-[163px] h-[61px] mt-2">
          <span
            className="absolute text-[48px] font-medium leading-none text-white"
            style={{ top: 0, left: 0, letterSpacing: "-0.77px" }}
          >
            {price}
          </span>
          <span
            className="absolute text-[16px] font-medium leading-none text-white"
            style={{
              top: "24px",
              left: "105px",
              letterSpacing: "-0.77px",
            }}
          >
            {priceSuffix}
          </span>
        </div>
      </div>

      <div
        className="w-full border border-transparent mt-6"
        style={{
          borderWidth: "0.83px",
          borderImage:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 48.8%, rgba(255,255,255,0) 100%) 1",
        }}
      />

      <div className="mt-6 flex flex-col gap-[16px] w-full">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-[12px]">
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
              {feature}
            </p>
          </div>
        ))}
      </div>

      <div
        className="w-full max-w-[328px] rounded-[12px] border border-white flex items-center justify-center mt-4 px-4 py-3"
        style={{
          background: subscribeButtonBg,
        }}
      >
        <p className="text-white text-[18px] font-normal leading-none">
          Je m'abonne
        </p>
      </div>
    </div>
  );
}
