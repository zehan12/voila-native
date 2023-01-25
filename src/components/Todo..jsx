import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Checkbox from "./Checkbox";


export default function Todo({
    id,
    text,
    isCompleled,
    isToday,
    hour
}){
    return(
        <View style={styles.container}>
            <Checkbox
                id={id}
                text={text}
                isCompleled={isCompleled}
                isToday={isToday}
                hour={hour}
            />
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.time}>{hour}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:20,
    },
    text:{
        fontSize:15,
        fontWeight:'500',
        color:"#737373",
    },
    time:{
        fontSize:13,
        color:"#a3a3a3",
        fontWeight:"500"
    }
})