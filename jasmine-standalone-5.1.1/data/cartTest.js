import {addtoCart, cart, loadFromStorage} from '../../data/cart.js';

describe('test suite: addtoCart',()=>{
    it('Adds an existing product to the cart', ()=>{
        spyOn(localStorage,'setItem'); //we dont want any of this code affecting our real cart 

        spyOn(localStorage, 'getItem').and.callFake(()=>{ //overriding orignally getItem
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        loadFromStorage();

        addtoCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(2);
    })

    it('Adds a new product to the cart',()=>{
        spyOn(localStorage,'setItem'); //we dont want any of this code affecting our real cart 

        spyOn(localStorage, 'getItem').and.callFake(()=>{ //overriding orignally getItem
            return JSON.stringify([]);
        });
        console.log(localStorage.getItem('cart'));

        loadFromStorage();

        addtoCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
    });
});