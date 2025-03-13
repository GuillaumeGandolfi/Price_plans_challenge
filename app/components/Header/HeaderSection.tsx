import TitleContainer from "./TitleContainer";
import PaymentOptionsContainer from "./PaymentOptionsContainer";

export default function HeaderSection() {
  return (
    <section className="flex flex-col items-center gap-8 w-full max-w-[727px] px-4">
      <TitleContainer />
      <PaymentOptionsContainer />
    </section>
  );
}
