export const URLS = {
  germany: 'https://fantasy-h2h.ru/analytics/fantasy_players_statistics/262?filter%5Bamplua_id%5D=0&filter%5Bsport_team_id%5D=0&filter%5Bname%5D=&filter%5Bteam_keyword%5D=&filter%5Bpopularity_index%5D=6601&filter%5Blast_price%5D=45%3B100&sort%5Bpoints%5D=desc',
  spain: 'https://fantasy-h2h.ru/analytics/fantasy_players_statistics/260?filter%5Bamplua_id%5D=0&filter%5Bsport_team_id%5D=0&filter%5Bname%5D=&filter%5Bteam_keyword%5D=&filter%5Bpopularity_index%5D=6601&filter%5Blast_price%5D=45%3B100&sort%5Bpoints%5D=desc',
  italy: 'https://fantasy-h2h.ru/analytics/fantasy_players_statistics/263?filter%5Bamplua_id%5D=0&filter%5Bsport_team_id%5D=0&filter%5Bname%5D=&filter%5Bteam_keyword%5D=&filter%5Bpopularity_index%5D=6601&filter%5Blast_price%5D=45%3B100&sort%5Bpoints%5D=desc',
  england: 'https://fantasy-h2h.ru/analytics/fantasy_players_statistics/256?filter%5Bamplua_id%5D=0&filter%5Bsport_team_id%5D=0&filter%5Bname%5D=&filter%5Bteam_keyword%5D=&filter%5Bpopularity_index%5D=6601&filter%5Blast_price%5D=45%3B100&sort%5Bpoints%5D=desc',
}

export const getUrls = (country, offset) => `${URLS[country]}&offset=${offset}`

export const pages = {
  germany: [0, 100, 200, 300, 400, 500],
  spain: [0, 100, 200, 300, 400, 500, 600],
  italy: [0, 100, 200, 300, 400, 500, 600],
  england: [0, 100, 200, 300, 400, 500, 600],
}