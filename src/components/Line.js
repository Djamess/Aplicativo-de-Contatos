import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Line = ({ label = "", content = "" }) => {
    return (
        <View style={styles.line}>
            <Text style={[
                styles.cell,
                styles.label,
                label.length > 8 ? styles.longLabel : null
            ]}>{label}</Text>
            <Text style={[styles.cell, styles.content]}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        backgroundColor: 'black',
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: 'silver'
    },
    cell: {
        color: 'white',
        fontSize: 18,
        paddingLeft: 5,

    },
    label: {
        fontWeight: 'bold',
        flex: 1
    },
    content: {
        flex: 3
    },
    longLabel: {
        fontSize: 12
    }
})

export default Line;