type Plantofm = {
  plantofm: string;
  img: string;
  title: string;
  price: number;
  id: number;
};

export default interface Xbox {
  filteredByPlayStation: (game: Plantofm) => string;
  data: any;
}
export type Xboxx = {
  hoveredGame: null;
  filteredByXbox: (game: Plantofm) => any;
};
