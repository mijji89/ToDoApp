import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TodoItem from './components/TodoItem';
import { Button } from 'expo-router/build/react-navigation';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
     <View style={styles.taskWrapper}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={styles.title}>Cosa devi fare oggi?</Text>
       
          <TouchableOpacity style={styles.button} onPress={() => console.log('Button pressed')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>

      </View>
      <View>
        <TodoItem  text={'Task 6'}/>
        <TodoItem  text={'Task 6'}/>
      </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e0539',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  }, 
  button:{
    width:50,
    height:50,
    borderRadius: 25,
    borderWidth: 2,
    backgroundColor: '#8dd4fd',
    justifyContent: 'center', 
    alignItems: 'center',
  }, 
  buttonText:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e0539',
    textAlign: 'center',

  }
});