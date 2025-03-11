import TitleContainer from "./TitleContainer";
import PaymentOptionsContainer from "./PaymentOptionsContainer";

export default function HeaderSection() {
  return (
    <section
      className="
        flex
        flex-col
        w-[727px]
        h-[216px]
        gap-[32px]
        items-center
      "
    >
      <TitleContainer />

      <PaymentOptionsContainer />
    </section>
  );
}
