export enum FaiblesseType {
  ArmeDeBase,
  ArmeBlanche,
  ArmeIncendiaire,
  AttaqueSurnaturelle,
  ArmeAFeu,
  AttaqueSacree,
  AttaqueDemoniaque
}

export const FaiblesseTypeList = [
  FaiblesseType.ArmeDeBase,
  FaiblesseType.ArmeBlanche,
  FaiblesseType.ArmeAFeu,
  FaiblesseType.ArmeIncendiaire,
  FaiblesseType.AttaqueSacree,
  FaiblesseType.AttaqueSurnaturelle,
  FaiblesseType.AttaqueDemoniaque
];

export interface IPersonnage {
  name: string;
  cards: number;
  pv: number;
  faiblesses: FaiblesseType[];
  faiblesseUltime: string;
}
