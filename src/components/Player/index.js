import './index.css';

const positionMap = {
  1: 'g',
  2: 'd',
  3: 'm',
  4: 'f'
}

export const Player = ({ info }) => {
  return (
    <div className={`player ${positionMap[info.position]}`}>
      <div className="player-name">{info.name}</div>
      <div className="player-points">{info.points}</div>
    </div>
  )
}