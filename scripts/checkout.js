import { renderOrderSummary} from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import {loadProducts} from '../data/products.js';
import {loadCart} from '../data/cart.js';
//import '../data/backend-practice.js';
//import '../data/cart-class.js';

Promise.all([ //runs both promises at the same time
    new Promise((resolve)=>{  
        console.log('start promise')
        loadProducts(()=>{
            console.log('finish loading')
            resolve('value1'); 
        });
    
    }),

    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    })

]).then((values)=>{
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});

/*
new Promise((resolve)=>{  //better way to handle asynchronous code; similar to done() function in Jasmine; let us wait for some code to finish before going to the next step
    console.log('start promise')
    loadProducts(()=>{
        console.log('finish loading')
        resolve('value1'); //run some asynchronous code, wait until it finishes, and then goes to resolve (resolves goes to the next step)
    });

}).then((value)=>{
    console.log(value);
    console.log('next step');
    return new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    });

}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})
*/


/*
loadProducts(()=>{ //call backs will require too much nesting
    loadCart(()=>{
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/