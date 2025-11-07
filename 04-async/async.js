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
        console.log(`   [@service - divide] processing ${x} and ${y}`);
        let p = new Promise((resolveFn, rejectFn) => {
          setTimeout(() => {
            let result = x / y;
            console.log(`   [@service - divide] returning result`);
            // pass on the result to the promise ?
            resolveFn(result);
            //   rejectFn(new Error('dummy error:')) //simulate the failure of async operation
          }, 4000);
        });
        return p;
    }

    /* 
    function processNos(x,y,z){
        let finalPromise = new Promise((resolveFn, rejectFn) => {
          let p = addAsyncPromise(x, y);
          p.then((result) => {
            let p2 = divideAsyncPromise(result, z);
            p2.then((finalResult) => {
              resolveFn(finalResult);
            });
          });
        });
        return finalPromise
    } 
    */

    function processNos(x, y, z) {
      
        /* 
        let p = addAsyncPromise(x, y);
        let resultPromise = p.then((result) => {
          let p2 = divideAsyncPromise(result, z);
          return p2
        });
        return resultPromise 
        */

        return addAsyncPromise(x,y)
            .then(result => divideAsyncPromise(result, z))
    }

    // the above function using async/await
    
    async function processNosAsyncAwait(x, y, z) {
        let addresult = await addAsyncPromise(x, y);
        let finalResult = await divideAsyncPromise(addresult, z)
        return finalResult
    }
   

    /* 
    function processNosClient(){
        let p = processNos(100,200,3)
        p.then(result => console.log(`final result = ${result}`))
    } 
    */

    async function processNosClient() {
      let result = await processNos(100, 200, 3);
      console.log(`final result = ${result}`)
    }

    globalThis['processNosClient'] = processNosClient

    async function seqProcessNosClient(a, b, c, d){
        // return (a + b) * (c /d )
         let addResult = await addAsyncPromise(a, b);
        let divideResult = await divideAsyncPromise(c, d)
        console.log('final result = ', addResult * divideResult)
    }

    globalThis["seqProcessNosClient"] = seqProcessNosClient;

    async function parallelProcessNosClient(a, b, c, d) {
      // return (a + b) * (c /d )
      let p1 = addAsyncPromise(a, b);
      let p2 = divideAsyncPromise(c, d)
      /* 
      return Promise.all([p1, p2]).then(([addResult, divideResult]) => {
        return addResult * divideResult
      }); 
      */
      let [addResult, divideResult]= await Promise.all([p1, p2])
      return addResult * divideResult
    }

    globalThis["parallelProcessNosClient"] = parallelProcessNosClient;

})()

