import { combineReducers } from 'redux';


const songsReducer = () => {
    return [
        {title: 'old town road', artist: 'lil nas x ft. billy ray cyrus', rank: 1},
        {title: 'bad guy', artist: 'billie ellish', rank: 2},
        {title: 'goodbyes', artist: 'post malone', rank: 3},
        {title: 'talk', artist: 'khalid', rank: 4},
        {title: 'senorita', artist: 'shawn mendes', rank: 5}]
}

const selectedSongReducer = (selectedSong = null, action) => {
    switch (action.type) {
        case 'SONG_SELECTED':
            return action.payload
        default:
            return selectedSong
    }
}


export const rootReducer = combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})