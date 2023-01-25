import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TodoList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    border: "2px solid black"
  },
  heading: {
    fontSize: "20px",
    color: "blue",
    border: "2px solid black"
  }
});
