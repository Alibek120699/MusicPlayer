import { createStore, applyMiddleware } from "redux";
import { PlayerReducer } from "./PlayerReducer";
import { PlaylistReducer } from "./PlaylistReducer";
import { CommonReducer } from "./CommonReducer";
import { asyncActions } from "./AsyncMiddleware";

export const PlayerDataStore
    = createStore(CommonReducer(PlayerReducer, PlaylistReducer),
        applyMiddleware(asyncActions));