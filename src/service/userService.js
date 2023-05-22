import { USERS_LIST } from "../constants";

export default async () => {
  // const response = await axios.get(URL)
  // return response.data.users

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(USERS_LIST);
    }, 1500);
  });
};
