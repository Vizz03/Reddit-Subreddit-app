import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Details = ({ navigation, route }) => {



    const [data, setData] = useState([])

    //get data from route
    const { id, date, author, title, description, permalink } = route.params;

    useEffect(() => {

        console.log(id, date, author, title, description, permalink)
        //comments
        axios.get('https://www.reddit.com' + permalink + '.json').then((response) => {


            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].data.children[i]?.kind == 't1') {

                    setData(response.data[i].data.children[i].data.body)

                } else {
                    console.log('no comments')
                }
            }


        })

    }, [])



    return (
        <>
            <View style={styles.container}>
                <Text style={styles.header}>Subreddit : r/reactnative Post</Text>


                <ScrollView style={styles.list}>
                    <View style={styles.article}>
                        <Text style={styles.item}>Date : {new Date(date).toString()}</Text>
                        <Text style={styles.item}>User : {author}</Text>
                        <Text style={styles.item}>Title : {title}</Text>
                        <Text style={styles.item}>Description : {description}:</Text>
                        <Text style={styles.item}>Comments</Text>
                        {data.length != 0 ? (<Text>{JSON.stringify(data)}</Text>) : (<Text>No Comments</Text>)}


                    </View>
                </ScrollView>

            </View>

        </>
    )
}

export default Details

const styles = StyleSheet.create({

    article: {
        margin: 90

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    item: {
        margin: 10
    },

    header: {
        fontSize: 24,
        margin: 30,
        marginBottom: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0
    },

    list: {
        marginTop: 90
    }
});
