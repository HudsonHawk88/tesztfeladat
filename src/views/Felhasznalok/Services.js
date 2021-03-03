import { Microservices } from "../../commons/Lib";
const usersUrl = "https://randomuser.me/api/";

export default class Services {
  static getUsers = async (results, url) => {
    const result = await Microservices.fetchApi(
      usersUrl +
        "?" +
        new URLSearchParams({
          results: results,
        }),
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    return result;
  };

  static getUsersTest = async (url) => {
    const result = await Microservices.fetchApi(url, {
      method: "GET",
      cache: "no-cache",
    });
    return result;
  };
}
