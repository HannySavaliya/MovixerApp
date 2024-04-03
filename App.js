import React from 'react';
import { Provider } from 'react-redux';
import Store from './Store';
import Navigation from './navigation/Navigation';
import { ModalPortal } from 'react-native-modals';
import { PlaceProvider } from './PlaceContext';

export default function App() {
  return (
    <Provider store={Store}>
      <PlaceProvider>
        <Navigation />
        <ModalPortal />
      </PlaceProvider>
    </Provider>
  );
}
