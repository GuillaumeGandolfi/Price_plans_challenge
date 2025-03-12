import PlanTemplate from "./PlanTemplate";

export default function EssentielPlan() {
  return (
    <PlanTemplate
      width={392}
      height={575}
      containerStyle={{
        background:
          "radial-gradient(129.76% 100% at 50.04% 100%, rgba(3,25,83,0.7) 0%, rgba(24,116,255,0.7) 100%)",
      }}
      title="Essentiel"
      price="$179"
      priceSuffix="/ month"
      iconSrc="/bullseye-arrow.svg"
      iconBg="#0959E5"
      iconPattern="/pattern_arrow.png"
      features={[
        "+2500 vues/mois",
        "+60 clics sur votre site",
        "+15 appels/mois",
        "+15 demandes d'itinéraires",
        "Plus de visibilité sur Google",
        "Réponse aux avis google inclus",
      ]}
    />
  );
}
