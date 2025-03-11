export default function TitleContainer() {
  return (
    <div
      className="
        flex
        flex-col
        w-[727px]
        h-[139px]
        gap-[12px]
        items-center
        justify-center
      "
    >
      {/* Title label */}
      <div
        className="
          flex
          items-center
          justify-center
          w-[120px]
          h-[30px]
          rounded-[99px]
          border
          border-[#97BAFF]/40
          py-[6px]
          px-[28px]
        "
        style={{
          background:
            "radial-gradient(63.68% 148.21% at 48.57% -48.21%, rgba(7, 56, 185, 0.4) 0%, rgba(3, 25, 83, 0.4) 100%)",
        }}
      >
        <p
          className="
            text-center
            text-[12px]
            leading-none
            font-normal
            tracking-[-0.03em]
            bg-clip-text
            text-transparent
          "
          style={{
            background:
              "linear-gradient(275.29deg, #88B3FD 36.84%, #5280D1 62.25%, #7CACFF 93.72%)",
            WebkitBackgroundClip: "text",
          }}
        >
          Nos offres
        </p>
      </div>

      {/* Subtitle */}
      <h2
        className="
          w-[727px]
          h-[100px]
          text-center
          text-[48px]
          leading-[50px]
          font-bold
          text-white
        "
      >
        Des prix en accord avec <br />
        <span
          style={{
            background: "linear-gradient(360deg, #043BCB 2%, #88B3FD 26.5%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          notre vision
        </span>
      </h2>
    </div>
  );
}
