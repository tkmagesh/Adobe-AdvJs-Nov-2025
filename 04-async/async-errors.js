(() => {
    function divideAsyncPromise(x, y) {
      console.log(`   [@service - divide] processing ${x} and ${y}`);
      let p = new Promise((resolveFn, rejectFn) => {
        setTimeout(() => {
            if (y === 0){
                return rejectFn(new Error('divide by zero error'))
            }
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
    function divideAsyncPromiseClient(x, y){
        divideAsyncPromise(x,y)
            .then(result => console.log(`result = ${result}`))
            .catch(err => console.log('error :', err))
            .finally(() => console.log('divide done!'))
    } 
    */

    async function divideAsyncPromiseClient(x, y) {
        try {
            let result = await divideAsyncPromise(x, y)
            console.log(`result = ${result}`)
        } catch(err) {
            console.log("error :", err)
        } finally {
            console.log("divide done!")
        }
    }

    globalThis["divideAsyncPromiseClient"] = divideAsyncPromiseClient;

})()