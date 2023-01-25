import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons"


export default function Checkbox({
    id,
    text,
    isCompleled,
    isToday,
    hour
}) {
    return (
        <>
        <TouchableOpacity style={styles.checked}
        onPress={() =>{
            console.log("click")
        }}

        >
            {isCompleled && <Entypo name="check" size={16} color="FAFAFA" />}
        </TouchableOpacity>

        </>
        
    )
}

const styles = StyleSheet.create({
    checked:{
        width:20,
        height:20,
        marginRight:13,
        borderRadius:6,
        backgroundColor: "#262626",
        alignItems:"center",
        justifyContent:"center",
        marginLeft:15,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:.3,
        shadowRadius:5,
        elevation:5
    }
})