import { Image, TouchableOpacity } from "react-native";
import { ImgCard } from "./styles";




export const MovieCards = (props: any) => {
    return (
        <TouchableOpacity>
            <ImgCard source={props.movieURL} />
        </TouchableOpacity>
    )
}