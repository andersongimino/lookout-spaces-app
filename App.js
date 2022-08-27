import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleTest}>Lookout spaces</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1171ef",
        alignItems: "center",
        justifyContent: "center",
    },
    titleTest: {
        fontSize: 18,
        color: "#ffffff",
        
    },
});
