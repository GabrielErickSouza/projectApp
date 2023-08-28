import { Image, TouchableOpacity, ImageSourcePropType } from "react-native";
import { ImgCard } from "./styles";


export type Props = {
    movieURL:ImageSourcePropType
}

export const MovieCards = (props:Props) => {
    return (
        <TouchableOpacity>
            <ImgCard source={props.movieURL} />
        </TouchableOpacity>
    )
}