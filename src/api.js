import {csv, json} from "d3-fetch";
import data from "url:../ressources/Game_of_Thrones.csv";
//import data from "../ressources/Game_of_Thrones.csv";


//récupère le contenu du fichier insights.json
const getData = csv(data).then(
    res => {
        const dataTrim = [];

        for (const episode of res) {

            const ep = {
                'season': episode['Season'],
                'noEpisodeSeason': episode['No. of Episode (Season)'],
                'noEpisodeOverall': episode['No. of Episode (Overall)'],
                'title': episode['Title of the Episode'],
                'airDate': episode['Original Air Date'],
                'viewers': episode['U.S. Viewers (Millions)'],
                'imdbRating': episode['IMDb Rating'],
                'rottenRating': episode['Rotten Tomatoes Rating (Percentage)'],
                'metacriticRating': episode['Metacritic Ratings'],
                'synopsis': episode['Synopsis']
            }

            dataTrim.push(ep);

        }
        return dataTrim;

       

    }

)

export {getData};