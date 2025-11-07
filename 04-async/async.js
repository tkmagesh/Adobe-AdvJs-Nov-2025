(() => {
    function add(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        let result = x + y
        console.log(`   [@service] returning result`);
        return result
    }

    function addClient(x,y){
        console.log(`[@client] invoking the service`)
        let result = add(x,y)
        console.log(`[@client] result = ${result}`);
    }

    globalThis['addClient'] = addClient;

    function addAsyncCallback(x, y, onResult) {
      console.log(`   [@service] processing ${x} and ${y}`);
      setTimeout(()=>{
        let result = x + y;
        console.log(`   [@service] returning result`);
        onResult(result);
      }, 4000)
    }

    function addAsyncCallbackClient(x, y) {
      console.log(`[@client] invoking the service`);
      addAsyncCallback(x, y, (result) => {
        console.log(`[@client] result = ${result}`);
      });
    }

    globalThis["addAsyncCallbackClient"] = addAsyncCallbackClient;

    function addAsyncPromise(x, y) {
      console.log(`   [@service] processing ${x} and ${y}`);
      let p = new Promise((resolveFn, rejectFn) => {
        setTimeout(() => {
          let result = x + y;
          console.log(`   [@service] returning result`);
          // pass on the result to the promise ?
          resolveFn(result)
        //   rejectFn(new Error('dummy error:')) //simulate the failure of async operation
        }, 4000);
      })
      return p;
    }

    

    
    function addAsyncPromiseClient_1(x, y) {
      console.log(`[@client] invoking the service`);
      let p = addAsyncPromise(x, y);
      p.then(result => {
        console.log(`[@client] result = ${result}`);
      })
      return 'something dummy!'
    } 

    globalThis["addAsyncPromiseClient_1"] = addAsyncPromiseClient_1;

    async function addAsyncPromiseClient_2(x, y) {
      console.log(`[@client] invoking the service`);
      let p = addAsyncPromise(x, y);
      let result = await p
      console.log(`[@client] result = ${result}`);
    } 
    
    globalThis["addAsyncPromiseClient_2"] = addAsyncPromiseClient_2;

    // DO NOT USE ASYNC/AWAIT
    function divideAsyncPromise(x,y){
        /* return a promise with the result of dividing x by y */
    }

    function processNos(x,y,z){
        /* 
            use the addAsyncPromise() to add x and y
            use the divideAsyncPromise() to divide the 'result of add operation' by z
            return the final result
        */
    }

    function processNosClient(){
        /* invoke processNos with (100, 200, 3) and print the result */
    }

    globalThis['processNosClient'] = processNosClient

})()

