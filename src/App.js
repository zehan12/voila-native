import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading} >React in Mobile</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFFF00',
    alignItems: 'center',
    justifyContent: 'center',
    border:"2px solid black"
  },
  heading:{
    fontSize:"20px",
    color:"blue",
    border:"2px solid black"
  }
});
