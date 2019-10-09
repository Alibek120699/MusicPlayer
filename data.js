const songs = []
for(let i=1; i<21; i++){
    songs.push({
        id: i,
        title: `track#${i}.mp3`,
        artist: `Artist#${i}`,
        category: "Running",
    });
}


for(let i=21; i<31; i++){
    songs.push({
        id: i,
        title: `track#${i}.mp3`,
        artist: `Artist#${i}`,
        category: "Walking",
    });
}

module.exports = function(){
    return {
        categories: ["Running", "Walking", "Reading", "Cleaning", "Coding", "Cooking", "Singing", "Training", "Travelling", ],
        songs,
    }
}