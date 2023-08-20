import {Player} from "../Player";
import './index.css';

const getTotal = (squad) => squad.reduce((acc, player) => {
  acc += player.points;
  return acc;
}, 0)

export const User = ({ name, squad }) => {
  return (
    <div className="user">
      <div className="user-name">
        {name}
      </div>
      <div className="user-total">Total: {getTotal(squad)}</div>
      {squad.map((player) => <Player info={player} />)}
    </div>
  )
}