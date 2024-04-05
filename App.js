import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/Navigation';
import { PlaceProvider } from './PlaceContext';

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
