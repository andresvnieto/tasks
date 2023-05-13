import { useEffect, useState } from "react";

export const useLocalStorage = (itemStorageName = 'TODOS', initialValue) => {
    const [data, setData] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    itemStorageName.trim().toUpperCase();

    const completed = data.filter(item => !!item.completed).length;
    const total = data.length;

    const saveData = (dataItems) => {
        localStorage.setItem(itemStorageName, JSON.stringify(dataItems));
        setData(dataItems);
    }

    const completeItem = (e, item) => {
        const updatedItems = [...data];
        const itemIndex = updatedItems.findIndex(i => i.id === item.id);
        const newItem = updatedItems[itemIndex];
        newItem.completed = !newItem.completed;
        saveData(updatedItems)
    }

    const removeItem = (e, item) => {
        const updatedData = [...data];
        const newData = updatedData.filter(i => i.id !== item.id);
        saveData(newData)
    }

    const initData = () => {
        const localStorageData = localStorage.getItem(itemStorageName);
        if (!localStorageData) {
            localStorage.setItem(itemStorageName, JSON.stringify(initialValue ? initialValue : data));
        } else {
            setData(JSON.parse(localStorageData))
        }
    }

    useEffect(() => {
        setTimeout(() => {
            try {
                initData();
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }, 5000);
        return;
    }, []);

    return {
        data,
        initData,
        saveData,
        completeItem,
        removeItem,
        completed,
        total,
        loading,
        error
    }

}