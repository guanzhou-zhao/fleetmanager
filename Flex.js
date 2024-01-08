import React from "react";
import {StyleSheet, View} from "react-native"

const Flex = () => {
    return (
        <View style={[styles.container, {flexDirection: 'coloum',}]}>
            <View style={{flex: 1, backgroundColor: 'red',}}/>
            <View style={{flex: 2, backgroundColor: 'white',}}/>
            <View style={{flex: 3, backgroundColor: 'blue',}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
});

export default Flex;