import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const localData = localStorage.getItem(itemName);
    let parsedData;
    if (localData) {
      parsedData = JSON.parse(localData);
    }else{
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedData = initialValue;
    }

    const [item, setItem] = React.useState(parsedData);
    
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }

    return [item, saveItem]
  }

  export { useLocalStorage }