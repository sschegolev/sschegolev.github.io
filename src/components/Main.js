import {usePlayers} from "../hooks/usePlayers";
import {Table} from "./Table";


export const Main = () => {
  const {players} = usePlayers();

  return players.length ? <Table players={players} /> : null;
}