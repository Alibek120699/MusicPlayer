const songs = []
for(let i=31; i<37; i++){
    songs.push({
        id: i,
        title: `track#${i}.mp3`,
        artist: `Artist#${i}`,
        category: "Singing",
    });
}


for(let i=37; i<51; i++){
    songs.push({
        id: i,
        title: `track#${i}.mp3`,
        artist: `Artist#${i}`,
        category: "Travelling",
    });
}

export const data = {
    categories: ["Running", "Walking", "Reading", "Cleaning", "Coding", "Cooking", "Singing", "Training", "Travelling", ],
    songs
}