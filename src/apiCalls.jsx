import axios from "axios";

// ,params:{'sort-by':'popularity'}
 export async function getAllGames(){
    let {data} = await axios('https://free-to-play-games-database.p.rapidapi.com/api/games',{headers:{'X-RapidAPI-Key': 
    'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
     'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
})
return data;

}
export async function getGameDetails(GameID){
    let {data} = await axios('https://free-to-play-games-database.p.rapidapi.com/api/game',{headers:{'X-RapidAPI-Key': 
    'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
     'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'},params:{'id':GameID}
})
return data;

}
export async function getGamesByCategory(category){
    let {data} = await axios('https://free-to-play-games-database.p.rapidapi.com/api/games',{headers:{'X-RapidAPI-Key': 
    'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
     'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'},params:{'category':category}
})
return data;

}
export async function  getGamesByPlatform(platform){
    let {data} = await axios('https://free-to-play-games-database.p.rapidapi.com/api/games',{headers:{'X-RapidAPI-Key': 
    'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
     'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'},params:{'platform':platform}
})
return data;

}
export async function getSortedGames(sortby) {
    let {data} = await axios('https://free-to-play-games-database.p.rapidapi.com/api/games',{headers:{'X-RapidAPI-Key': 
    'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
     'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'},params:{'sort-by':sortby}
})
return data;
}