function add(x,y){
    return x + y
}

test("add(100,200) => 300", () => {
    let expected = 300
    let actual = add(100,200)
    expect(expected).toBe(actual)
});