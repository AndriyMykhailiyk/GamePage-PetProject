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
interface GameI {
  id: number;
  title: string;
  price: number;
  img: string;
  plantofm: string;
}

export type Xboxx = {
  SelectedGames: {
    id: number;
    title: string;
    img: string;
    plantofm: string;
    price: number;
  }[];
  handleFavoriteToggle: (game: Plantofm) => void;
  hoveredGame: null;
  filteredByXbox:GameI[];
};
