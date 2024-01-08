import React from "react";
import {StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { useState } from "react";

const FlexDirectionBasics = () => {
    // Use array destructuring assignment, not Object destructuring
    const [flexDirection, setFlexDirection] = useState('row');
    return (
        <FlexControlLayout
            label='flexDirection'
            values={['column', 'row', 'column-reverse', 'row-reverse']}
            selectedValue={flexDirection}
            setSelectedValue={setFlexDirection}>
            <View style={[styles.box, {backgroundColor: 'powderblue'}]}/>
            <View style={[styles.box, {backgroundColor: 'skyblue'}]}/>
            <View style={[styles.box, {backgroundColor: 'steelblue'}]}/>
        </FlexControlLayout>
    )
}

const FlexControlLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue
}) => (
    // the style 'flex:1' in the outter tag will make sure the contents takes whole screen space
    <View style={{padding: 20, flex:1}}>
        <Text style={styles.lable}>{label}</Text>
        <View style={styles.buttonContainer}>
            {/** In order to automaticly return in arrow method, can't write curly braces*/}
            {values.map(value => (
                <TouchableOpacity 
                    key={value}
                    onPress={()=>setSelectedValue(value)}
                    style={
                        // 'true && something' gives out something
                        [
                        styles.button,
                        value === selectedValue && styles.selectedButton
                    ]}
                >
                    <Text style={[
                        styles.buttonLabel,
                        value === selectedValue && styles.selectedLabel
                    ]}>
                        {value}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
        <View style={[styles.boxContainer, {[label]: selectedValue}]}>
            {children}
        </View>
    </View>
)

const styles = StyleSheet.create({
    lable: {
        fontSize: 30,
        textAlign: 'center',
    },
    box: {
        width: 50,
        height: 50,
    },
    boxContainer: {
        marginTop: 8,
        flex: 1,
        backgroundColor: 'aliceblue'
    },
    selectedButton: {
        backgroundColor: 'coral',
    },
    button: {
        marginHorizontal: '1%',
        minWidth: '48%',
        marginBottom: 6,
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 4,
        backgroundColor: 'oldlace',
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    buttonLabel: {
        fontSize: 20,
        color: 'coral',
        fontWeight: '500',
    },
    selectedLabel: {
        color: 'white'
    }
})

export default FlexDirectionBasics;