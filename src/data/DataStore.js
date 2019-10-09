import { createStore } from "redux";
import { PlayerReducer } from "./PlayerReducer";

export const PlayerDataStore = createStore(PlayerReducer);