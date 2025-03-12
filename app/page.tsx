import HeaderSection from "./components/HeaderSection";
import PlansContainer from "./components/Plans/PlansContainer";

export default function Page() {
  return (
    <section className="relative min-h-screen bg-[#010B25] overflow-hidden">
      {/* 2 ellipses pour ajouter un effet au background */}
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

      <div className="relative z-10 flex flex-col items-center">
        <div className="pt-8">
          <HeaderSection />
        </div>

        <div className="mt-16 mb-8">
          <PlansContainer />
        </div>
      </div>
    </section>
  );
}
