import { useCallback, useState } from 'react';

interface UseBool {
  value: boolean,
  toggle: () => void,
  setValue: (newValue: boolean) => void
}

const useBool = (defaultValue = false): UseBool => {
  const [value, setBoolValue] = useState<boolean>(defaultValue || false);

  const setValue = useCallback((newValue: boolean) => {
    setBoolValue(newValue);
  }, []);

  const toggle = useCallback(() => {
    setBoolValue(!value);
  }, [setValue]);

  return {
    value,
    toggle,
    setValue,
  };
};

export { useBool };
