import { StyleSheet } from "react-native";
import Colors from "./constants/Colors";

export const defaultStyles = StyleSheet.create({
    primaryBtn: {
        backgroundColor: Colors.primary,
        color: '#fff',
        height: 50,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    primaryBtnText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "lato-b",
    },
    secondaryBtn: {
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    secondaryBtnText: {
        fontSize: 16,
        fontFamily: "lato",
        textDecorationLine: "underline"
    },
    infoContainer: {
        paddingHorizontal: 16,
        paddingVertical: 24,
        gap: 12,
        flex: 1
    },
    infoMainHeader: {
        fontSize: 20, 
        fontFamily: 'lato-b', 
    },
    infoSubHeader: {
        fontSize: 16, 
        fontFamily: 'lato',
        fontWeight: '600' 
    },
    infoSubHeaderBold: {
        fontSize: 16, 
        fontFamily: 'lato-b',
        fontWeight: '600' 
    },
    divider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: Colors.grey,
        marginVertical: 16,
    },
    infoDivider: {
        width: "100%",
        height: 8,
        backgroundColor: "#CECECE",
    },
})