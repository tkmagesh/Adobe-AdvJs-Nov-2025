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

    window['addClient'] = addClient;

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

    window["addAsyncCallbackClient"] = addAsyncCallbackClient;

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

    function addAsyncPromiseClient(x, y) {
      console.log(`[@client] invoking the service`);
      let p = addAsyncPromise(x, y);
      p.then(result => {
        console.log(`[@client] result = ${result}`);
      })
    }

    window['addAsyncPromiseClient'] = addAsyncPromiseClient;
})()

