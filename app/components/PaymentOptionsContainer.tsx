export default function PaymentOptionsContainer() {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        w-[569px]
        h-[45px]
        rounded-[9.17px]
      "
    >
      {/* Monthly payment option */}
      <div
        className="
          flex
          items-center
          justify-center
          w-[275px]
          h-[45px]
          gap-[9.17px]
          rounded-[9.17px]
          border
          border-white/40
          px-[18.33px]
          py-[9.17px]
        "
        style={{
          background:
            "radial-gradient(51.41% 105.14% at 50.04% 105.14%, #0A308B 0%, #1E6EFB 100%)",
        }}
      >
        <p
          className="
            text-center
            text-[18px]
            font-medium
            leading-none
            text-white
          "
        >
          Paiement Mensuel
        </p>
      </div>

      {/* Annual payment option */}
      <div
        className="
          flex
          items-center
          justify-center
          w-[275px]
          h-[45px]
          gap-[9.17px]
          rounded-[9.17px]
          border
          border-white/40
          px-[18.33px]
          py-[9.17px]
          bg-transparent
        "
      >
        <p
          className="
            text-center
            text-[18px]
            font-medium
            leading-none
            px-2
            py-1
          "
          style={{
            color: "#FFFFFF",
          }}
        >
          Paiement Annuel (-20%)
        </p>
      </div>
    </div>
  );
}
