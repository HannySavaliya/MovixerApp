import Navigation from './navigation/Navigation';
import { PlaceProvider } from './PlaceContext';

function App() {
  return (
    <PlaceProvider> 
        <Navigation />
    </PlaceProvider>
  );
}

export default App

