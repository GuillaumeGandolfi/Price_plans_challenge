import HeaderSection from "./components/Header/HeaderSection";
import PlansContainer from "./components/Plans/PlansContainer";

export default function Page() {
  return (
    <section className="relative min-h-screen bg-[#010B25] overflow-hidden">
      {/* Ellipses de background */}
      <div
        className="absolute z-0 bg-[#1241C5]/50 rounded-full blur-[80px]"
        style={{
          width: "50px",
          height: "1200px",
          bottom: 0,
          left: "50%",
          transform: "translateX(-100%) rotate(-45deg)",
          transformOrigin: "bottom center",
        }}
      />
      <div
        className="absolute z-0 bg-[#1241C5]/50 rounded-full blur-[80px]"
        style={{
          width: "50px",
          height: "1200px",
          bottom: 0,
          right: 0,
          transform: "translateX(-80%) rotate(-45deg)",
          transformOrigin: "bottom right",
        }}
      />

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center max-w-[1440px] mx-auto px-4">
        {/* Header */}
        <div className="pt-8">
          <HeaderSection />
        </div>

        {/* Plans */}
        <div className="mt-16 mb-8 w-full">
          <PlansContainer />
        </div>
      </div>
    </section>
  );
}
