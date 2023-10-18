import axios from "axios";

export const getRecipesList = async (tags = null) => {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: {
      from: "0",
      size: "20",
      tags,
    },
    headers: {
      "X-RapidAPI-Key": "a7045185dbmsh874d2bc3c9e3eccp13016ejsn3cdeec7e10fe",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  return await axios.request(options);
};
