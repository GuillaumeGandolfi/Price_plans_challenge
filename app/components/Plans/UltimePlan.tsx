import PlanTemplate from "./PlanTemplate";

export default function UltimePlan() {
  return (
    <PlanTemplate
      width={403}
      height={654}
      containerStyle={{
        backgroundColor: "#A3D7FD",
        backgroundImage: "url('/Pattern.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0px 0px 45.83px 4.58px #BCCAFF33",
      }}
      title="Ultime"
      price="$439"
      priceSuffix="/ month"
      iconSrc="/gem.svg"
      iconBg="#FFFFFF"
      badge="best offer"
      subscribeButtonBg="radial-gradient(51.41% 105.14% at 50.04% 105.14%, #0A308B 0%, #1E6EFB 100%)"
      features={[
        "+6500 vues/mois",
        "+200 clics sur votre site",
        "+40 appels/mois",
        "+40 demandes d'itinéraires",
        "Plus de visibilité sur Google",
        "Réponse aux avis google inclus",
        "1 shooting",
        "QR code personnalisé",
      ]}
    />
  );
}
