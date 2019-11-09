let faker = require("faker");
let data = [];
let categories = ["Running", "Walking", "Reading", "Cleaning", "Coding", "Cooking", "Singing", "Training", "Travelling", ];
faker.seed(100);

for(let i=1; i<=1000; i++){
    let category = faker.helpers.randomize(categories);
    data.push({
        id: i,
        title: `${category}: ${faker.lorem.sentence(3)}mp3`,
        artist: faker.name.firstName(),
        category
    });
}

module.exports = function(){
    return {
        categories: categories,
        songs: data,
    }
}


