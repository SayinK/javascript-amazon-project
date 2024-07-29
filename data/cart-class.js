//easy to create multiple objects
//create functions that generates products
class Cart{
    cartItems;
    #localStorageKey; //privatre property = only accessed in the class

    constructor(localStorageKey) { //after we create out object, it will run the constructor and set everything up
        this.#localStorageKey = localStorageKey; //this points to the object we are creating
        this.#loadFromStorage();
    }

    #loadFromStorage(){ //private method
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)); //turns it back into array
    
        if(!this.cartItems){
        this.cartItems = [{
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2,
            deliveryOptionId: '1'
        },{
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1,
            deliveryOptionId: '2'
        }];
        };
    }

    saveToStorage(){
        localStorage.setItem(this.#localStorageKey,JSON.stringify(this.cartItems));
    }

    addtoCart(productId){
        let matchingItem;
    
            this.cartItems.forEach((cartItem)=>{
                if(productId === cartItem.productId){
                    matchingItem = cartItem;
                }
            });
    
            if (matchingItem){
                matchingItem.quantity +=1;
            }
            else{
                this.cartItems.push({
                    productId: productId,
                    quantity: 1,
                    deliveryOptionId: '1'
                });
            }
    
            this.saveToStorage();
    }

    removeFromCart(productId){
        const newCart = [];

        this.cartItems.forEach((cartItem)=>{
            if (cartItem.productId != productId){
                newCart.push(cartItem);
            }
        });

        this.cartItems = newCart;

        this.saveToStorage();
    }

    updateDeliveryOption(productId, deliveryOptionId){
        let matchingItem;
    
        this.cartItems.forEach((cartItem)=>{
            if(productId === cartItem.productId){
                matchingItem = cartItem;
            }
        });
    
        matchingItem.deliveryOptionId = deliveryOptionId;
    
        this.saveToStorage();
    }

}
const cart = new Cart('cart-oop'); //this is called an instance of a class
const businessCart = new Cart('cart-business');

cart.#localStorageKey = 'test'; //will fail

console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart); //will say its true