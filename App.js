import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PlaceProvider } from './PlaceContext'; // Import PlaceProvider
import Navigation from './navigation/Navigation';

export default function App() {
  return (
    <PlaceProvider> 
        <Navigation />
    </PlaceProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
