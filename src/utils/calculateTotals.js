export const calculateTotals =  (products) => {
    
    const items = Object.keys(products);
    if (!items)  return false;
    const total = 0;
    items.map((item_key) => { 
        total +=products[item_key]?.price * products[item_key].quantity
    });
    return total;
}