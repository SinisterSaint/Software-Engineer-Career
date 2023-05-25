import axios from "axios";
import { LOAD_PLANET } from "./types";


function getPlanetFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/planets/${id}/`);
    let {
      name,
      population,
      climate,
      residents,
      films
    } = res.data;

    residents = residents.map(url => url.match(/\d+/)[0]);
    films = films.map(url => url.match(/\d+/)[0]);

    const planet = { id, name, population, climate, residents, films };
    dispatch(gotPlanet(planet));
  };
}


function gotPlanet(planet) {
  return { type: LOAD_PLANET, payload: planet };
}


export { getPlanetFromAPI }