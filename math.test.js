import { it, expect } from 'vitest'
import { add } from './math'

it('adds 1 + 2 to equal 3', () => {
    // arrange
    const numbers = [1, 2, 3]
    const expectedResult = numbers.reduce((acc, cur) => acc + cur)
    // actions
    const result = add(numbers)
    // assertions
    expect(result).toBe(expectedResult)
})

it('it should provide NaN if at least one invalid numbers is provided', () => {
    // arrange
    const numbers = [1, 'invalid', 3]
    // actions
    const result = add(numbers)
    // assertions
    expect(result).toBeNaN()
})

it('it should provide correct sum if a numeric string is provided', () => {
    // arrange
    const numbers = [1, '2', 3]
    const expectedResult = numbers.reduce((acc, cur) => +acc + +cur)
    // actions
    const result = add(numbers)
    // assertions
    expect(result).toBe(expectedResult)
})



it('it should throw an error if no argument is passed', () => {

    const resultFn = () => {
        add()
    }

    expect(resultFn).toThrow()
})


it('it should throw an error if multiple argument are passed', () => {

    const resultFn = () => {
        add(1, 2, 3)
    }

    expect(resultFn).toThrow(/is not iterable/i);
})

