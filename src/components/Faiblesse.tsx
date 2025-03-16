import { FaiblesseType } from "../types";
// import "./assets/icons/arme-a-feu.jpg";
// import "./assets/icons/arme-blanche.jpg";
// import "./assets/icons/arme-de-base.jpg";
// import "./assets/icons/arme-incendiaire.jpg";
// import "./assets/icons/attaque-demoniaque.jpg";
// import "./assets/icons/attaque-sacree.jpg";
// import "./assets/icons/attaque-surnaturelle.jpg";

import imgArmeAFeu from "../assets/icons/arme-a-feu.jpg";
import imgArmeBlanche from "../assets/icons/arme-blanche.jpg";
import imgArmeDeBase from "../assets/icons/arme-de-base.jpg";
import imgArmeIncendiaire from "../assets/icons/arme-incendiaire.jpg";
import imgAttaqueDemoniaque from "../assets/icons/attaque-demoniaque.jpg";
import imgAttaqueSacree from "../assets/icons/attaque-sacree.jpg";
import imgAttaqueSurnaturelle from "../assets/icons/attaque-surnaturelle.jpg";

export default function Faiblesse({
  type,
  activated = true,
  onClick
}: {
  type: FaiblesseType;
  activated?: boolean;
  onClick?: () => void;
}) {
  let img = null;
  switch (type) {
    case FaiblesseType.ArmeAFeu:
      img = imgArmeAFeu;
      break;
    case FaiblesseType.ArmeBlanche:
      img = imgArmeBlanche;
      break;
    case FaiblesseType.ArmeDeBase:
      img = imgArmeDeBase;
      break;
    case FaiblesseType.ArmeIncendiaire:
      img = imgArmeIncendiaire;
      break;
    case FaiblesseType.AttaqueDemoniaque:
      img = imgAttaqueDemoniaque;
      break;
    case FaiblesseType.AttaqueSacree:
      img = imgAttaqueSacree;
      break;
    case FaiblesseType.AttaqueSurnaturelle:
      img = imgAttaqueSurnaturelle;
      break;
  }
  return (
    <img
      onClick={onClick}
      src={img}
      alt={FaiblesseType[type]}
      style={{
        width: "30px",
        height: "30px",
        opacity: activated ? 1 : 0.5
      }}
    />
  );
}
