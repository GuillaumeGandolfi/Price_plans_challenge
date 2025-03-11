export default function HeaderSection() {
  return (
    <section
      className="
        flex
        flex-col
        w-[727px]
        h-[216px]
        gap-[32px]
      "
    >
      {/* Title_container */}
      <div
        className="
          flex
          flex-col
          w-[727px]
          h-[139px]
          gap-[12px]
        "
      ></div>

      {/* Payment_option_container */}
      <div
        className="
          flex
          w-[569px]
          h-[45px]
          rounded-[9.17px]
        "
      ></div>
    </section>
  );
}
