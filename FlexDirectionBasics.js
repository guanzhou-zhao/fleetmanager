import React from "react";
import {StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { useState } from "react";

const FlexDirectionBasics = () => {
    const {flexDirection, setFlexDirection} = useState('column');
    return (
        <FlexControlLayout
            label='flexDirection'
            values={['column', 'row', 'column-reverse', 'row-reverse']}
            selectedValue={flexDirection}
            setSelectedValue={setFlexDirection}
        >
            <View style={[
                    styles.box,
                    {
                        backgroundColor: 'powderblue'
                    }
                ]}/>
            <View style={[
                    styles.box,
                    {
                        backgroundColor: 'skyblue'
                    }
                ]}/>
            <View style={[
                    styles.box,
                    {
                        backgroundColor: 'steelblue'
                    }
                ]}/>
        </FlexControlLayout>
    )
}

const FlexControlLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue
}) => {
    return (
        <View style={[{marginTop: 20}]}>
            <Text style={styles.lable}>{label}</Text>
            <View style={styles.buttonContainer}>
                {
                    values.map(value => {
                        <TouchableOpacity 
                            key={value}
                            onPress={()=>setSelectedValue(value)}
                            style={[
                                styles.button,
                                value === selectedValue && styles.selected
                            ]}
                        >
                            <Text style={[
                                styles.buttonLabel
                            ]}>
                                {value}
                            </Text>
                        </TouchableOpacity>
                    })
                }
            </View>
            <View style={[styles.container, {[label]: selectedValue}]}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    lable: {
        fontSize: 30,
        textAlign: 'center',
    },
    box: {
        width: 50,
        height: 50,
    },
    container: {
        marginTop: 8,
        flex: 1,
        backgroundColor: 'aliceblue'
    },
    selected: {
        color: 'white',
        backgroundColor: 'coral'
    },
    button: {
        marginHorizontal: '1%',
        minWidth: '48%',
        marginBottom: 6,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: 'oldlace',
        textAlign: 'center',
        alignSelf: 'flex-start'
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    buttonLabel: {
        
    }
})

export default FlexDirectionBasics;