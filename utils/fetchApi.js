import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

// headers: {
//   'X-RapidAPI-Key': '2fc1652eeamshd30c2c1c665576bp1a1bd3jsn8162938c8cc5',
//   'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
// }

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "2fc1652eeamshd30c2c1c665576bp1a1bd3jsn8162938c8cc5",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};
