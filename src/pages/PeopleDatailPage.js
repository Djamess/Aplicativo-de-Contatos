import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Line from '../components/Line';

export default class PeopleDatailPage extends React.Component {
    render() {
        const { people } = this.props.navigation.state.params //.people
        const { title, first, last } = people.name
        return (
            <View style={styles.container}>
                <Image
                    style={styles.avatar}
                    source={{ uri: people.picture.large }} />
                <View style={styles.detailContainer}>
                    <Line label="E-mail:" content={people.email} />
                    <Line label="Cidade:" content={people.location.city} />
                    <Line label="Estado:" content={people.location.state} />
                    <Line label="Tel:" content={people.phone} />
                    <Line label="Cel:" content={people.cell} />
                    {/* <Line label="Nacionalidade:" content={people.nat} /> */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: 'black'
    },
    avatar: {
        marginTop: 50,
        alignSelf: 'center',
        width: 100,
        height: 100,
        aspectRatio: 1,
        borderRadius: 200
    },
    detailContainer: {
        backgroundColor: 'white',
        marginTop: 200,
        marginBottom: 1000,
        elevation: 1
    }
})