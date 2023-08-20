import {useEffect, useState} from "react";
import {getUrls, pages} from "../constants/urls";

const getPlayers = (table) => Array.from(table.querySelectorAll('#players_list tbody tr')).map((item) => {
  return {
    name: item.cells[3].innerText.trim(),
    total: +item.cells[13].innerText,
    team: item.cells[2].innerText.trim()
  }
});

const loadCountry = (country) => Promise.all(pages[country].map((offset) => fetch(getUrls(country, offset))));

const getBody = async(responses) => Promise.all(responses.map(response => response.text()))

const parseBodies = (bodies) => bodies.map(body => new DOMParser().parseFromString(body, 'text/html'));

const getCountryPlayers = async(country) => {
  const responses = await loadCountry(country);
  const bodies = await getBody(responses);
  const parsedBodies = parseBodies(bodies);
  return parsedBodies.map(body => getPlayers(body)).flat(1);
}

export const usePlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const parsedGermany = await getCountryPlayers('germany');
      const parsedSpain = await getCountryPlayers('spain');
      const parsedItaly = await getCountryPlayers('italy');
      const parsedEngland = await getCountryPlayers('england');

      const p = [
        ...parsedGermany,
        ...parsedSpain,
        ...parsedItaly,
        ...parsedEngland,
      ];

      setPlayers(p);
    }

    fetchData();

  }, []);

  return { players };
}