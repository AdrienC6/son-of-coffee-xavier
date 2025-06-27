import AsyncStorage from '@react-native-async-storage/async-storage';

interface UseLocalStorage {
  getValue: () => Promise<string | null>
  setValue: (newValue: string) => void
}

const useLocalStorage = (key: string): UseLocalStorage => {
  const getValue = async () => await AsyncStorage.getItem(key);

  const setValue = async (newValue: string) => AsyncStorage.setItem(key, newValue);

  return {
    getValue,
    setValue,
  };
};

export { useLocalStorage };
