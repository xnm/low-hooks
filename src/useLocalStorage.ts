import { useEffect, useState } from 'react';

const useLocalStorage = (key: string, initialValue: string): [string, (nextValue: string) => void] => {
    const [value, setValue] = useState<string>(initialValue);

    const setStorage = (nextValue: string) => {
        setValue(nextValue);
        localStorage.setItem(key, value);
    }

    const handleStorage = (storage: StorageEvent) => {

    }
    window.addEventListener('storage', handleStorage);

    useEffect(() => {
        return () => {
            window.removeEventListener('storage', handleStorage);
        }
    }, [value])

    return [value, setStorage];
};
  
  export default useLocalStorage;