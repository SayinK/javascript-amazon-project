export const orders = JSON.parse(localStorage.getItem('orders')) || []; //if there is nothing in local storage, use empty array

export function addOrder(order){
    orders.unshift(order); //add order to the front
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('orders', JSON.stringify(orders));
}