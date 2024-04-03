import { StyleSheet } from 'react-native';
import { PlaceProvider } from './PlaceContext'; 
import Navigation from './navigation/Navigation';

export default function App() {
  return (
    <PlaceProvider> 
      <Navigation />
    </PlaceProvider>
  );
}

const styles = StyleSheet.create({});
