import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for a single game in the addedGames array
interface Game {
  id: number;
  img: string;
  plantofm: string;
  title: string;
  price: number;
}

interface SelectedGame {
  id: number;
  title: string;
  plantofm: string;
  price: number;
  img: string;
}

// Define the type for the entire state
export interface CounterState {
  count: number;
  counterSelected: {
    count: any;
    SelectedGames: SelectedGame[]; // Use the SelectedGame interface here
  };

  SelectedGames: SelectedGame[]; // Use the SelectedGame interface here

  addedGames: Game[];
  AddFavorute: {
    count: number; // Лічильник вибраних ігор
    SelectedGames: SelectedGame[]; // Include SelectedGames here
  };
}

// Define the initial state with the correct type
const initialState: CounterState = {
  count: 0,
  addedGames: [],
  AddFavorute: {
    count: 0, // Початкове значення для кількості обраних ігор
    SelectedGames: [], // Initialize as an empty array
  },
  counterSelected: {
    count: 0,
    SelectedGames: [],
  },
  SelectedGames: [], // Initialize as an empty array
};
const loadState = (): CounterState => {
  const serializedState = localStorage.getItem("counterState");
  return serializedState ? JSON.parse(serializedState) : {
    count: 0,
    addedGames: [],
    SelectedGames: [],
  };
};

// Save state to localStorage
const saveState = (state: CounterState) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("counterState", serializedState);
};


const initialState2 = loadState();



const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: CounterState, action: PayloadAction<Game>) => {
      console.log("Payload гри:", action.payload); // Додайте це для відлагодження
      if (!state.addedGames.some((game) => game.id === action.payload.id)) {
        state.count += 1;
        state.addedGames.push(action.payload);
        console.log("Гру №" + action.payload.id + " Додано до списку");
        console.log(action.payload.price);
      }
    },
    removeGame: (state, action: PayloadAction<number>) => {
      state.count -= 1;
      state.addedGames = state.addedGames.filter(
        (game) => game.id !== action.payload
      );
      console.log("Гру №" + action.payload + " Видалено з списку");
    },
  },
});

const counterSelectedSlice = createSlice({
  name: "counterSelected",
  initialState: {
    count: 0,
    SelectedGames: [] as SelectedGame[],
  },
  reducers: {
    incrementselected: (state, action: PayloadAction<SelectedGame>) => {
      console.log("Payload гри:", action.payload); // Додайте це для відлагодження
      if (!state.SelectedGames.some((game) => game.id === action.payload.id)) {
        state.count += 1;
        state.SelectedGames.push(action.payload);
        console.log("Гру №" + action.payload.id + " Додано до вибраних");
      }
    },
    removeselected: (state, action: PayloadAction<number>) => {
      state.count -= 1;
      state.SelectedGames = state.SelectedGames.filter(
        (game) => game.id !== action.payload // Передайте тільки ID
      );
      saveState(state); // Save state after updating

      console.log("Гру №" + action.payload + " Видалено з вибраних");
    }
  },
});

export const { incrementselected, removeselected } =
  counterSelectedSlice.actions;

export const { increment, removeGame } = counterSlice.actions;
export default counterSlice.reducer;
export const counterSelectedReducer = counterSelectedSlice.reducer;
