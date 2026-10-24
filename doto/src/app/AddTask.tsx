import React from 'react';
import {View, Text, TextInput,TouchableOpacity, ScrollView, StyleSheet} from 'react-native';

const PRESET_CATEGORIES=[
  {id: '1', name: 'Work', color: '#67a5ce'}, 
  {id: '2', name: 'Personal', color: '#e13c60'},
  {id: '3', name: 'Shopping', color: '#a609e9'},
  {id: '4', name: 'Fitness', color: '#49e43b'},
]; 

export default function AddTask() {
 const [title, setTitle] = React.useState('');
 const [priority, setPriority] = React.useState('Medium');
 const [date, setDate]= React.useState('DD/MM/YYYY');
 const [selectedCategory, setSelectedCategory] = React.useState('1');
 const [categories, setCategories] = React.useState(PRESET_CATEGORIES);

 return(
  <ScrollView style={styles.container}>
    <Text style={styles.header}>New Task</Text>
    <TextInput
      style={styles.input}
      placeholder="What do you need to do?"
      value={title}
      onChangeText={setTitle}
      placeholderTextColor="#999"
    />
    <Text style={styles.label}>Due Date</Text>
    <TouchableOpacity style={styles.input} onPress={() => console.log('Date picker')}>
      <Text style={{color: date === 'DD/MM/YYYY' ? '#999' : '#000'}}>{date}</Text>
    </TouchableOpacity>
    <Text style={styles.label}>Priority</Text>
    <View style={styles.priorityContainer}>
      {['Low', 'Medium', 'High'].map((level) => (
        <TouchableOpacity
          key={level}
          style={[
            styles.priorityButton,
            priority === level && styles.prioritySelected
          ]}
          onPress={() => setPriority(level)}
        >
          <Text style={{ color: priority === level? '#1e0539' : '#fff' }}>{level}</Text>
        </TouchableOpacity>
      ))}
    </View>
    <Text style={styles.label}>Category</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={[
            styles.categoryBadge,
            { backgroundColor: selectedCategory === category.id ? category.color : '#fff' },
          ]}
          onPress={() => setSelectedCategory(category.id)}
        >
          <Text style={styles.categoryText}>{category.name}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={[styles.categoryBadge, { backgroundColor: '#fff' }]}>
        <Text style={[styles.categoryText, { color: '#1e0539' }]}>+ New</Text>
      </TouchableOpacity>
    </ScrollView>
    <TouchableOpacity style={styles.saveButton} onPress={() => console.log('Save task')}>
      <Text style={styles.saveButtonText}>Save Task</Text>
    </TouchableOpacity>
  </ScrollView>
 );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#1e0539', 
    padding: 20 
  },
  header: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#fff', 
    marginBottom: 20, 
    marginTop: 40 
  },
  label: { 
    color: '#fff', 
    fontSize: 16, 
    marginTop: 15, 
    marginBottom: 8, 
    fontWeight: '600' 
  },
  input: { 
    backgroundColor: '#333', 
    padding: 15, 
    borderRadius: 10, 
    color: '#fff', 
    fontSize: 16 
  },
  priorityContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  priorityButton: { 
    flex: 1, 
    padding: 12, 
    borderWidth: 1, 
    borderColor: '#8dd4fd', 
    borderRadius: 8, 
    marginHorizontal: 5, 
    alignItems: 'center' 
  },
  prioritySelected: { 
    backgroundColor: '#8dd4fd' 
  },
  categoryScroll: { 
    flexDirection: 'row', 
    marginBottom: 20 
  },
  categoryBadge: { 
    paddingHorizontal: 15, 
    paddingVertical: 10, 
    borderRadius: 20, 
    marginRight: 10, 
    justifyContent: 'center' 
  },
  categoryText: { 
    color: '#fff', 
    fontWeight: 'bold' 
  },
  saveButton: {
     backgroundColor: '#8dd4fd',
      padding: 15, borderRadius: 10, 
      alignItems: 'center', 
      marginTop: 30, 
      marginBottom: 40 
    },
  saveButtonText: { 
    color: '#1e0539', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
});