import { lk } from "./lk"

test('test sum', () => {
    expect(lk(1, 22)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22])
})
