import React from 'react'
import { StyleSheet, Text, View, TextInput,Button, ScrollView } from 'react-native';


const CardMessage = ({name,message}) => {
    return (
      <View style={name === 'Arthur' ? styles.messageBoxR : styles.messageBoxS}>
        <Text style={styles.nameText}>{name}:</Text>
        <Text style={styles.messageText}>{message}</Text>
      </View>
    );
}

export default CardMessage

const styles = StyleSheet.create({
    nameText:{
        fontSize:16,
        fontWeight:"500",
        marginRight: 6,
    },
    messageText:{
        fontSize:14,
        fontWeight:"400"
    },
    messageBoxR:{
        backgroundColor: '#dfffcf',
        padding: 20,
        borderRadius:12,
        marginLeft: 20,
        borderColor:'#dfffcf',
        marginTop: 10,
        borderStyle:"solid",
        borderWidth:2
    },
    messageBoxS:{
        backgroundColor: '#fff',
        padding: 20,
        borderRadius:12,
        marginRight: 20,
        marginTop: 10,
        borderColor:'#fff',
        borderStyle:"solid",
        borderWidth:2
    },
})
