import {ImageSourcePropType} from 'react-native'

export type Movie = {
  id:string,
  nome:string,
  moviesURL:ImageSourcePropType
}
export const MOVIESWATCH = [
  {
    id: "1",
    name: "English",
    moviesURL: require("../assets/movies/English.png"),
  },
  {
    id: "2",
    name: "Hindi",
    moviesURL: require("../assets/movies/Hindi.png"),
  },
  {
    id: "3",
    name: "Telugu",
    moviesURL: require("../assets/movies/English.png"),
  },
];
