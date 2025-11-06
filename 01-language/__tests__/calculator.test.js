function add(x,y){
    return x + y
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

/*
test('add(100, "abc")', ()=> {

})

test('add(100)', ()=> {

})

test('add()', ()=> {

})

test('add(100, 200, 300, 400, 500)', ()=> {

})

test('add([100, 200])', ()=> {

})

test('add([100, "200"])', ()=> {

})

test('add(100, ["abc"])', ()=> {

})

test('add([100, 200, 300], [400, 500])', ()=> {

})

test('add([[100, 200, 300],[400, 500]])', ()=> {

})

test('add(function(){ return 100;}, function(){ return "200"; })', ()=> {

})

test('add(function(){ return [100, 200, 300]}, function(){ return [400, 500];})', ()=> {

}) */