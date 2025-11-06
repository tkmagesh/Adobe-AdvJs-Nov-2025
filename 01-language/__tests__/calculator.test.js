/* 
function add(){
    function parseArg(n){
        if (Array.isArray(n)) return add.apply(this, n)
        if (typeof n === 'function') return parseArg(n())
        return isNaN(n) ? 0 : Number(n)
    }
    return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add(Array.prototype.slice.call(arguments, 1))
} 
*/

function add(...args) {
  function parseArg(n) {
    if (Array.isArray(n)) return add(...n);
    if (typeof n === "function") return parseArg(n());
    return isNaN(n) ? 0 : Number(n);
  }
//   return args.length <= 1 ? parseArg(args[0]) : parseArg(args[0]) + add(args.slice(1));
  return args.reduce((sum, val) => sum + parseArg(val), 0)
} 

test("add(100,200) => 300", () => {
    let expected = 300
    let actual = add(100,200)
    expect(expected).toBe(actual)
});


test('add(100, "200") => 300', ()=> {
    let expected = 300;
    let actual = add(100, "200");
    expect(expected).toBe(actual);
})


test('add(100, "abc") => 100', ()=> {
    let expected = 100;
    let actual = add(100, "abc");
    expect(expected).toBe(actual);
})


test('add(100) => 100', ()=> {
    let expected = 100;
    let actual = add(100);
    expect(expected).toBe(actual);
})

test('add() => 0', ()=> {
    let expected = 0;
    let actual = add(0);
    expect(expected).toBe(actual);
})


test('add(100, 200, 300, 400, 500) => 1500', ()=> {
    let expected = 1500;
    let actual = add(100, 200, 300, 400, 500);
    expect(expected).toBe(actual);
})


test('add([100, 200]) => 300', ()=> {
    let expected = 300;
    let actual = add([100, 200]);
    expect(expected).toBe(actual);
})


test('add([100, "200"]) => 300', ()=> {
    let expected = 300;
    let actual = add([100, "200"]);
    expect(expected).toBe(actual);
})


test('add(100, ["abc"]) => 100', ()=> {
    let expected = 100;
    let actual = add(100, ["abc"]);
    expect(expected).toBe(actual);
})

test('add([100, 200, 300], [400, 500]) => 1500', ()=> {
    let expected = 1500;
    let actual = add([100, 200, 300], [400, 500]);
    expect(expected).toBe(actual);
})

test('add([[100, 200, 300],[400, 500]]) => 1500', ()=> {
    let expected = 1500;
    let actual = add([[100, 200, 300],[400, 500]]);
    expect(expected).toBe(actual);
})


test('add(function(){ return 100;}, function(){ return "200"; }) => 300', ()=> {
    let expected = 300;
    let actual = add(function () { return 100;},function () {return "200";});
    expect(expected).toBe(actual);
})


test('add(function(){ return [100, 200, 300]}, function(){ return [400, 500];}) => 1500', ()=> {
    let expected = 1500;
    let actual = add(function(){ return [100, 200, 300]}, function(){ return [400, 500];})
    expect(expected).toBe(actual);
    
})

test('add([function(){ return [100, 200, 300]}, function(){ return [400, ["500", "abc"]];}]) => 1500', ()=> {
    let expected = 1500;
    let actual = add([function(){ return [100, 200, 300]}, function(){ return [400, ["500", "abc"]];}])
    expect(expected).toBe(actual);
    
})
