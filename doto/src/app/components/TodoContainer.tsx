import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TodoItem, { Todo } from './TodoItem';

interface TodoContainerProps{
    categoryName:string; 
    categoryColor:string; 
    todos:Todo[];
}

export default function TodoContainer({ categoryName, categoryColor, todos }: TodoContainerProps) {
    return (
        <View style={styles.container}>
          <View style={[styles.header, { backgroundColor: categoryColor }]}>
            <Text style={styles.categoryTitle}>{categoryName}</Text>
          </View>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
        </View>
    );

}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});