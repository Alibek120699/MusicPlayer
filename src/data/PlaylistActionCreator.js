import { ActionTypes } from "./Types";

export const addToPlaylist = (song) => ({
    type: ActionTypes.ADD_TO_PLAYLIST,
    payload: {
        song,
    }
});

export const removeFromPlaylist = (song) => ({
    type: ActionTypes.REMOVE_FROM_PLAYLIST,
    payload: {
        song,
    }
});

export const clearPlaylist = () => ({
    type: ActionTypes.CLEAR_PLAYLIST
});

