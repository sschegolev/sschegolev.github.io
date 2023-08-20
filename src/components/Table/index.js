import {initialData} from "../../data/squads";
import {User} from "../User";
import {playersTable} from "../../data/players";
import './index.css';

const getPoints = (data, playerName) => {
  if (playerName === 'Эдерсон') {
    return data.find((player) => player.name === playerName && player.team === 'Манчестер Сити').total;
  }
  if (playerName === 'Диас') {
    return data.find((player) => player.name === playerName && player.team === 'Ливерпуль').total;
  }
  if (playerName === 'Вейга') {
    return data.find((player) => player.name === playerName && player.team === 'Сельта').total;
  }
  return data.find((player) => player.name === playerName).total;
}

const createSquad = (initialSquad, data) => initialSquad.map((player) => ({
  ...player,
  points: getPoints(data, playersTable[player.name].name) - player.gap,
}));

export const Table = ({ players }) => {
  return (
    <div className="table">
      {Object.keys(initialData).map((key) => (
        <User key={key} name={key} squad={createSquad(initialData[key], players)} />
      ))}
    </div>
  )
}