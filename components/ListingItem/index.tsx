import { Listing } from "@/interface/Listing";
import { Text } from "react-native";

export default function ListingItem({data}: {data: Listing}) {
    return (
        <Text>{data.id}</Text>
    )
}