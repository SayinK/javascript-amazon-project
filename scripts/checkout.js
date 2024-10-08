import { renderOrderSummary} from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';
//import '../data/backend-practice.js';
//import '../data/cart-class.js';

async function loadPage(){ //async makes function return a promise
    try{
        //throw 'error 1'; manually creates an error
        await loadProducts(); //lets use write asynchronous code like normal code (.then of promise); waits for this function to run

        const value = await new Promise((resolve, reject)=>{ //reject lets us create an error in the future
            //throw 'error 2'
            loadCart(()=>{
                //reject('error3');
                resolve('value3');
            });
        });
    } catch(error) {
        console.log('unexpected error. please try again')
    }

    renderOrderSummary();
    renderPaymentSummary();

}
loadPage();



/*
Promise.all([ //runs both promises at the same time
    new Promise((resolve)=>{  
        console.log('start promise')
        loadProducts(()=>{
            console.log('finish loading')
            resolve('value1'); 
        });
    
    }), //!!!!!! can just write loadProductsFech() since this returns a promise (but its not working for me :()

    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    })

]).then((values)=>{
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});*/



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