// setItem 
export const setItemsStorage = (key , items) => {
    localStorage.setItem(key , JSON.stringify(items));
}

// getItem 
export const getItemsStorage = (key) => {
    const items = typeof window !== "undefined" && localStorage.getItem(key) !== null  && JSON.parse(localStorage.getItem(key));
    return items;
}