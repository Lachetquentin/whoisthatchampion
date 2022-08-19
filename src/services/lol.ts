const axios = require('axios');

const getChampionInfos = (championName: string) => {
  const url = `https://ddragon.leagueoflegends.com/cdn/12.15.1/data/fr_FR/champion/${championName}.json`;
  return axios.get(url);
};

const lolServices = {
  getChampionInfos,
};

export default lolServices;
