import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TodoItem = (props) => {
    return( <View style={styles.item}> 
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.text}>{props.text}</Text>
        </View>
        <View style={styles.circular}>

        </View>
    </View>)
}

const styles= StyleSheet.create({
   text:{
    maxWidth: '80%',
   }, 
    item:{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    }, 
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    }, 
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#8dd4fd',
        marginRight: 15,
    }, 
    circular:{
        width: 12,
        height: 12,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#8dd4fd',
    }
})

export default TodoItem;
