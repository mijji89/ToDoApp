import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import TodoItem, { Todo } from './components/TodoItem';
import { Button } from 'expo-router/build/react-navigation';
import TodoContainer from './components/TodoContainer';
import AddTask from './AddTask';
import { useRouter } from 'expo-router';


export default function HomeScreen() {
  const router = useRouter();
  const workTodos: Todo[] = [
    { id: '1', title: 'Finire UI', category: 'Lavoro', categoryColor: '#FF6B6B', priority: 'high', dueDate: new Date() },
    { id: '2', title: 'Meeting con il team', category: 'Lavoro', categoryColor: '#FF6B6B', priority: 'medium', dueDate: new Date() },
  ];
  const personalTodos: Todo[] = [
    { id: '3', title: 'Fare la spesa', category: 'Personale', categoryColor: '#4ECDC4', priority: 'low', dueDate: new Date() },
  ];

  return (
    <View style={styles.container}>
     <ScrollView style={styles.taskWrapper}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={styles.title}>What do you need to do today?</Text>

      </View>
      <View>
        <TodoContainer categoryName="Lavoro" categoryColor="#FF6B6B" todos={workTodos} />
        <TodoContainer categoryName="Personale" categoryColor="#4ECDC4" todos={personalTodos} />
      </View>
     </ScrollView>
     <TouchableOpacity style={styles.button} onPress={() => router.push('/AddTask')}>
       <Text style={styles.buttonText}>+</Text>
     </TouchableOpacity>
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
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#8dd4fd',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Ombra su Android
    shadowColor: '#000', // Ombra su iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  }, 
  buttonText:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e0539',
    textAlign: 'center',

  }
});