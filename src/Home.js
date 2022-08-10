import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'




const baseUrl = 'https://www.reddit.com/r/reactnative/hot.json'


const Home = ({ navigation }) => {

    const [reddits, setReddits] = useState("")
 

    const showDetails = (id, date, author, title, description, permalink) => {


        navigation.navigate('Details', {
            id: id,
            date: date,
            author: author,
            title: title,
            description: description,
            permalink: permalink

        })
        console.log(id)
    }


    useEffect(() => {
        axios.get(baseUrl).then((response) => {
           
            setReddits(response.data.data)

        }
        )
    }, []);

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.header}>Subreddit : r/reactnative</Text>


                <ScrollView style={styles.list}>




                    {reddits.length != 0 ? (
                        reddits.children.map((reddit) => (
                            <Pressable style={styles.article} key={reddit.data.id} onPress={() => showDetails(reddit.data.id, reddit.data.created_utc, reddit.data.author, reddit.data.title, reddit.data.selftext, reddit.data.permalink)}>
                                <Text style={styles.item}>Date : {new Date(reddit.data.created_utc).toString()}</Text>
                                <Text style={styles.item}>User : {reddit.data.author}</Text>
                                <Text style={styles.item}>Title : {reddit.data.title}</Text>
                                {/* <View style={{flexWrap: 'wrap', flexDirection: 'row', margin: 10, justifyContent: 'center', alignItems: 'center'}}>
                                 <Text style={{ flex : 1}}>Description : {reddit.data.selftext}</Text>
                                 </View> */}


                            </Pressable>

                        ))
                    ) : null}





                </ScrollView>

            </View>

        </>
    )
}

const styles = StyleSheet.create({

    article: {
        margin: 30,
        borderWidth: 1,
        borderRadius: 15


    },
    container: {
        flex: 1,
        flexWrap: 'wrap',
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    item: {
        margin: 10,

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


export default Home