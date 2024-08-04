const xhr = new XMLHttpRequest(); //creates a new HTTP message to send to the backend (message=request)

xhr.addEventListener('load', ()=>{
    console.log(xhr.response); //will not be undefined
});

xhr.open('GET', 'https://supersimplebackend.dev'); //types of requests (GET, POST, PUT, DELETE)
xhr.send(); //Request-Response Cycle: 1 request, 1 response

//using browser is the same as a GET request