import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import capitalizeFistLetter from '../util/';

const PeopleListItem = props => {
    const { people, navigateToPeopleDetail } = props
    const { title, first, last } = people.name
    return (
        // Não transformei a primeira letra para MAIUSCULA porque não teve necessidade.
        <TouchableOpacity onPress={() => {
            navigateToPeopleDetail({ people })

        }}>
            <View style={styles.line}>
                <Image style={styles.avatar} source={{ uri: people.picture.thumbnail }} />
                <Text style={styles.lineText}>
                    {` ${first} ${last}`}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: 'silver',
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50
    }
})
export default PeopleListItem