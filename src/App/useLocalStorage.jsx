import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localData = localStorage.getItem(itemName);
  
        if(!localData) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        }else{
          setItem(JSON.parse(localData));
        }
  
        setLoading(false);
      }catch(error){
        setLoading(false);
        setError(true);
      }
    }, 300)
  }, []);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return {
    item,
    saveItem,
    loading,
    error,
  }
}

export { useLocalStorage }