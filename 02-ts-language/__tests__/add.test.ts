// __tests__/add.test.ts
import { add } from '../src/add'

test("add(10,20) => 30", () => {
    const expectedResult = 30;
    const actualResult = add(10, 20);
    expect(actualResult).toBe(expectedResult);
});

test("add('10',20) => 30", () => {
    const expectedResult = 30;
    const actualResult = add("10", 20);
    expect(actualResult).toBe(expectedResult);
});

test("add('abc',20) => 20", () => {
    const expectedResult = 20;
    const actualResult = add("abc", 20);
    expect(actualResult).toBe(expectedResult);
});

test("add(10) => 10", () => {
    const expectedResult = 10;
    const actualResult = add(10);
    expect(actualResult).toBe(expectedResult);
});

test("add(10,20,30,40,50) => 150", () => {
    const expectedResult = 150;
    const actualResult = add(10, 20, 30, 40, 50);
    expect(actualResult).toBe(expectedResult);
});

test("add([10,20,30],[40,50,60]) //=> 210", () => {
    const expectedResult = 210;
    const actualResult = add([10, 20, 30], [40, 50, 60]);
    expect(actualResult).toBe(expectedResult);
});

test("add([10,'20',30],[40,50,'abc']) //=> 150", () => {
    const expectedResult = 150;
    const actualResult = add([10, "20", 30], [40, 50, "abc"]);
    expect(actualResult).toBe(expectedResult);
});

test("add([10,20,30],[['abc',50,'60'],70]) //=> 240", () => {
    const expectedResult = 240;
    const actualResult = add([10, 20, 30], [["abc", 50, "60"], 70]);
    expect(actualResult).toBe(expectedResult);
});

test("add(function () { return 10; }, function () { return 20; }) //=> 30", () => {
    const expectedResult = 30;
    const actualResult = add(() => 10, () => 20);
    expect(actualResult).toBe(expectedResult);
});

test('add(function () { return [10, 20, "abc"]; }, function () { return [40, 50, "60"]; }) //=> 180', () => {
    const expectedResult = 180;
    const actualResult = add(() => [10, 20, "abc"], () => [40, 50, "60"]);
    expect(actualResult).toBe(expectedResult);
});

test('add([function () { return [10, 20, "abc"]; }, function () { return [40, 50, "60"]; }]) //=> 180', () => {
    const expectedResult = 180;
    const actualResult = add([() => [10, 20, "abc"], () => [40, 50, "60"]]);
    expect(actualResult).toBe(expectedResult);
});

test('add(function () { return [function () { return [10, 20, "abc"]; }, function () { return [40, 50, "60"]; }]; }) //=> 180', () => {
    const expectedResult = 180;
    const actualResult = add(() => [() => [10, 20, "abc"], () => [40, 50, "60"]]);
    expect(actualResult).toBe(expectedResult);
});
