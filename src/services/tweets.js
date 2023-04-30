import { api } from "./api";

export function fetchTweets() {
  return api.get('/tweet.json').then((response) => response.data);
}
