import * as SecureStore from 'expo-secure-store';

export const saveCredentials = async (email, password) => {
  try {
    await SecureStore.setItemAsync('email', email);
    await SecureStore.setItemAsync('password', password);
  } catch (error) {
    console.error('Error saving credentials:', error);
  }
};

const getCredentials = async () => {
  try {
    const email = await SecureStore.getItemAsync('email');
    const password = await SecureStore.getItemAsync('password');
    return { email, password };
  } catch (error) {
    console.error('Error retrieving credentials:', error);
    return null;
  }
};

export default getCredentials

