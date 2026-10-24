import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface Todo{
    id: string; 
    title: string; 
    category:string; 
    categoryColor: string; 
    priority: "low" | "medium" | "high";
    dueDate: Date; 
}

interface TodoItemProps{
    todo: Todo; 
}


const TodoItem = ({ todo }: TodoItemProps) => {
    return( 
    <View style={styles.item}> 
        <View style={styles.itemLeft}>
            <View style={[styles.square, {backgroundColor: todo.categoryColor}]}></View>
            <View>
                <Text style={styles.title}>{todo.title}</Text>
                <Text style={styles.details}>
                    {todo.dueDate.toLocaleDateString()} - {todo.priority}
                </Text>
            </View>
        </View>
        <View style={[styles.circular,{borderColor: todo.categoryColor}]}></View>
    </View>
    ); 
};

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
    title:{
        fontWeight: 'bold',
        fontSize: 16,
        maxWidth: '80%',
    }, 
    details:{
        fontSize: 12,
        color: '#666',
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
