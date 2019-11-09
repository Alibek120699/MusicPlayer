import { ActionTypes } from "./Types";

export const PlaylistReducer = (storeData, action) => {
    let newStore = { playlist: [], songsNumber: 0, ...storeData }
    switch(action.type){
        case ActionTypes.ADD_TO_PLAYLIST:
            const s = action.payload.song;

            let existing = newStore.playlist.find(item => item.song.id === s.id);

            if(!existing){
                newStore.playlist = [...newStore.playlist, action.payload];
            }
            newStore.songsNumber = newStore.playlist.length;
            return newStore;
        case ActionTypes.REMOVE_FROM_PLAYLIST:
            let selection = newStore.playlist.find(item => 
                item.song.id === action.payload.song.id);
            newStore.songsNumber--;
            newStore.playlist = newStore.playlist.filter(item => item !== selection);
            return newStore;
        case ActionTypes.CLEAR_PLAYLIST:
            return { ...storeData, playlist: [], songsNumber: 0}
        default:
            return storeData || {};
    }
}