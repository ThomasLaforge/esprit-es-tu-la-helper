import { useMemo, useState } from "react";
import "./App.css";
import Faiblesse from "./components/Faiblesse";

import {
  FaiblesseType,
  FaiblesseTypeList,
  IPersonnage
} from "./types";

const personnages: IPersonnage[] = [
  {
    name: "Petite Fille",
    cards: 2,
    pv: 13,
    faiblesses: [
      FaiblesseType.ArmeDeBase,
      FaiblesseType.AttaqueSurnaturelle,
      FaiblesseType.AttaqueDemoniaque
    ],
    faiblesseUltime: "Sac de classe"
  },
  {
    name: "Pom-Pom Girl",
    cards: 2,
    pv: 14,
    faiblesses: [
      FaiblesseType.ArmeAFeu,
      FaiblesseType.AttaqueSurnaturelle,
      FaiblesseType.AttaqueDemoniaque
    ],
    faiblesseUltime: "Sac de classe"
  },
  {
    name: "Croque-Mort",
    cards: 2,
    pv: 15,
    faiblesses: [
      FaiblesseType.ArmeDeBase,
      FaiblesseType.ArmeBlanche,
      FaiblesseType.ArmeAFeu
    ],
    faiblesseUltime: "Lampe"
  },
  {
    name: "Caméraman",
    cards: 2,
    pv: 16,
    faiblesses: [
      FaiblesseType.ArmeDeBase,
      FaiblesseType.ArmeBlanche,
      FaiblesseType.ArmeIncendiaire,
      FaiblesseType.AttaqueSurnaturelle
    ],
    faiblesseUltime: "Lampe"
  },
  {
    name: "Prêtre",
    cards: 2,
    pv: 17,
    faiblesses: [
      FaiblesseType.ArmeBlanche,
      FaiblesseType.ArmeAFeu,
      FaiblesseType.ArmeIncendiaire
    ],
    faiblesseUltime: "Grimoire"
  },
  {
    name: "Livreur",
    cards: 2,
    pv: 18,
    faiblesses: [
      FaiblesseType.ArmeDeBase,
      FaiblesseType.ArmeAFeu,
      FaiblesseType.AttaqueSurnaturelle,
      FaiblesseType.AttaqueDemoniaque
    ],
    faiblesseUltime: "Lampe"
  },
  {
    name: "Institutrice",
    cards: 3,
    pv: 19,
    faiblesses: [
      FaiblesseType.ArmeBlanche,
      FaiblesseType.ArmeAFeu,
      FaiblesseType.ArmeIncendiaire,
      FaiblesseType.AttaqueSurnaturelle
    ],
    faiblesseUltime: "Sac de classe"
  },
  {
    name: "Médium",
    cards: 3,
    pv: 20,
    faiblesses: [
      FaiblesseType.ArmeDeBase,
      FaiblesseType.ArmeAFeu,
      FaiblesseType.ArmeIncendiaire,
      FaiblesseType.AttaqueDemoniaque
    ],
    faiblesseUltime: "Grimoire"
  },
  {
    name: "Policier",
    cards: 3,
    pv: 21,
    faiblesses: [
      FaiblesseType.ArmeDeBase,
      FaiblesseType.ArmeBlanche,
      FaiblesseType.ArmeIncendiaire,
      FaiblesseType.AttaqueDemoniaque
    ],
    faiblesseUltime: "Munitions"
  },
  {
    name: "Chasseur",
    cards: 3,
    pv: 22,
    faiblesses: [
      FaiblesseType.ArmeBlanche,
      FaiblesseType.AttaqueSurnaturelle,
      FaiblesseType.AttaqueDemoniaque
    ],
    faiblesseUltime: "Munitions"
  },
  {
    name: "Docteur",
    cards: 2,
    pv: 23,
    faiblesses: [
      FaiblesseType.ArmeDeBase,
      FaiblesseType.ArmeAFeu,
      FaiblesseType.ArmeIncendiaire,
      FaiblesseType.AttaqueSurnaturelle
    ],
    faiblesseUltime: "Bandage"
  },
  {
    name: "Colonel",
    cards: 3,
    pv: 24,
    faiblesses: [
      FaiblesseType.ArmeBlanche,
      FaiblesseType.ArmeIncendiaire,
      FaiblesseType.AttaqueSurnaturelle,
      FaiblesseType.AttaqueDemoniaque
    ],
    faiblesseUltime: "Munitions"
  },
  {
    name: "Poupée Maléfique",
    cards: 2,
    pv: 14,
    faiblesses: [
      FaiblesseType.ArmeAFeu,
      FaiblesseType.ArmeIncendiaire,
      FaiblesseType.AttaqueSacree
    ],
    faiblesseUltime: "Exorcisme"
  },
  {
    name: "Squelette",
    cards: 2,
    pv: 15,
    faiblesses: [
      FaiblesseType.ArmeDeBase,
      FaiblesseType.ArmeAFeu,
      FaiblesseType.ArmeIncendiaire
    ],
    faiblesseUltime: "Bandage"
  },
  {
    name: "Fantôme",
    cards: 2,
    pv: 16,
    faiblesses: [
      FaiblesseType.AttaqueSacree,
      FaiblesseType.AttaqueDemoniaque,
      FaiblesseType.AttaqueSurnaturelle
    ],
    faiblesseUltime: "Exorcisme"
  },
  {
    name: "Serial Killer",
    cards: 2,
    pv: 17,
    faiblesses: [
      FaiblesseType.ArmeDeBase,
      FaiblesseType.ArmeIncendiaire,
      FaiblesseType.AttaqueSurnaturelle,
      FaiblesseType.AttaqueDemoniaque
    ],
    faiblesseUltime: "Munitions"
  },
  {
    name: "Zombie",
    cards: 2,
    pv: 18,
    faiblesses: [
      FaiblesseType.ArmeDeBase,
      FaiblesseType.ArmeBlanche,
      FaiblesseType.ArmeAFeu,
      FaiblesseType.ArmeIncendiaire
    ],
    faiblesseUltime: "Sang"
  },
  {
    name: "Momie",
    cards: 2,
    pv: 19,
    faiblesses: [
      FaiblesseType.ArmeDeBase,
      FaiblesseType.ArmeBlanche,
      FaiblesseType.ArmeIncendiaire,
      FaiblesseType.AttaqueSacree
    ],
    faiblesseUltime: "Bandage"
  },
  {
    name: "Dame Blanche",
    cards: 3,
    pv: 20,
    faiblesses: [
      FaiblesseType.AttaqueSacree,
      FaiblesseType.AttaqueDemoniaque,
      FaiblesseType.AttaqueSurnaturelle
    ],
    faiblesseUltime: "Exorcisme"
  },
  {
    name: "Sorcière",
    cards: 3,
    pv: 21,
    faiblesses: [
      FaiblesseType.ArmeDeBase,
      FaiblesseType.ArmeBlanche,
      FaiblesseType.ArmeAFeu,
      FaiblesseType.AttaqueSurnaturelle
    ],
    faiblesseUltime: "Grimoire"
  },
  {
    name: "Loup-Garou",
    cards: 3,
    pv: 22,
    faiblesses: [
      FaiblesseType.ArmeBlanche,
      FaiblesseType.ArmeAFeu,
      FaiblesseType.AttaqueSacree,
      FaiblesseType.AttaqueDemoniaque
    ],
    faiblesseUltime: "Chat"
  },
  {
    name: "Clown Maléfique",
    cards: 3,
    pv: 23,
    faiblesses: [
      FaiblesseType.ArmeAFeu,
      FaiblesseType.AttaqueSacree,
      FaiblesseType.AttaqueDemoniaque
    ],
    faiblesseUltime: "Chat"
  },
  {
    name: "Vampire",
    cards: 3,
    pv: 24,
    faiblesses: [
      FaiblesseType.ArmeBlanche,
      FaiblesseType.AttaqueSacree,
      FaiblesseType.AttaqueDemoniaque
    ],
    faiblesseUltime: "Sang"
  },
  {
    name: "Démon",
    cards: 3,
    pv: 25,
    faiblesses: [
      FaiblesseType.ArmeBlanche,
      FaiblesseType.ArmeIncendiaire,
      FaiblesseType.AttaqueSacree,
      FaiblesseType.AttaqueDemoniaque
    ],
    faiblesseUltime: "Chat"
  }
];

function App() {
  const [nbCards, setNbCards] = useState(2);
  const [bluffed, setBluffed] = useState(false);
  const [selectedFaiblesses, setSelectedFaiblesses] =
    useState<FaiblesseType[]>([]);
  const [notFaiblesses, setNotFaiblesses] = useState<
    FaiblesseType[]
  >([]);

  const possibilities = useMemo(() => {
    // We keep personnages that have the same number of cards or more
    // And that have all the selected faiblesses
    // And that don't have any of the not selected faiblesses
    return personnages.filter((personnage) => {
      if (personnage.cards < nbCards) {
        return false;
      }

      const reallySelectedFaiblesses =
        selectedFaiblesses.filter(
          (faiblesse) => !notFaiblesses.includes(faiblesse)
        );

      const hasAllSelectedFaiblesses =
        reallySelectedFaiblesses.every((faiblesse) =>
          personnage.faiblesses.includes(faiblesse)
        );

      const hasNoneOfNotFaiblesses = notFaiblesses.every(
        (faiblesse) =>
          !personnage.faiblesses.includes(faiblesse)
      );

      return (
        hasAllSelectedFaiblesses && hasNoneOfNotFaiblesses
      );
    });
  }, [nbCards, selectedFaiblesses, notFaiblesses]);

  console.log("state", selectedFaiblesses, notFaiblesses);

  return (
    <div className="App">
      <div className="form">
        <h2>Formulaire</h2>
        <div className="form-nom-joueur">
          <label htmlFor="nom-adversaire">Joueur :</label>
          <input id="nom-adversaire" type="text" />
        </div>
        <div className="form-nb-cards">
          <label htmlFor="nb-cards">Nb cards</label>
          <input
            id="nb-cards"
            type="number"
            max={3}
            min={2}
            value={nbCards}
            onChange={(e) =>
              setNbCards(parseInt(e.target.value))
            }
          />
        </div>
        <div className="form-bluffed">
          <label htmlFor="bluffed">Bluffed</label>
          <input
            id="bluffed"
            type="checkbox"
            checked={bluffed}
            onChange={(e) => setBluffed(e.target.checked)}
          />
        </div>
        <div className="faiblesses-list">
          {FaiblesseTypeList.map((faiblesse, index) => (
            <Faiblesse
              key={index}
              type={faiblesse}
              onClick={() => {
                if (
                  selectedFaiblesses.includes(faiblesse)
                ) {
                  if (notFaiblesses.includes(faiblesse)) {
                    setNotFaiblesses(
                      notFaiblesses.filter(
                        (f) => f !== faiblesse
                      )
                    );
                  }
                  setSelectedFaiblesses(
                    selectedFaiblesses.filter(
                      (f) => f !== faiblesse
                    )
                  );
                  return;
                }
                setSelectedFaiblesses([
                  ...selectedFaiblesses,
                  faiblesse
                ]);
              }}
            />
          ))}
        </div>
      </div>

      <div className="adversary-infos">
        <h2>Indices</h2>
        <div className="adversary-cards">
          {selectedFaiblesses.map((faiblesse, index) => (
            <Faiblesse
              key={index}
              type={faiblesse}
              activated={!notFaiblesses.includes(faiblesse)}
              onClick={() => {
                if (notFaiblesses.includes(faiblesse)) {
                  setNotFaiblesses(
                    notFaiblesses.filter(
                      (f) => f !== faiblesse
                    )
                  );
                  return;
                }
                setNotFaiblesses([
                  ...notFaiblesses,
                  faiblesse
                ]);
              }}
            />
          ))}
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Personnage</th>
            <th>Cards</th>
            {/* <th>PV</th> */}
            <th>Faiblesses</th>
            <th>Faiblesse ultime</th>
          </tr>
        </thead>
        <tbody>
          {possibilities.map((personnage, index) => (
            <tr key={index}>
              <td>{personnage.name}</td>
              <td>{personnage.cards}</td>
              {/* <td>{personnage.pv}</td> */}
              <td>
                {personnage.faiblesses.map(
                  (faiblesse, index) => (
                    <Faiblesse
                      key={index}
                      type={faiblesse}
                    />
                  )
                )}
              </td>
              <td>{personnage.faiblesseUltime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
