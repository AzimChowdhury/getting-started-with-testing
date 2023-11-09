import { expect, it } from "vitest";
import { validateArrayNotEmpty, validation } from "./validation";


it('should validate a correct email address', () => {
    const email = 'example@example.com';
    const resultFn = () => validation(email)
    expect(resultFn).not.toThrow()
})

it('should throw an error if an invalid email is passed', () => {
    const email = 'example';
    const resultFn = () => validation(email)
    expect(resultFn).toThrow()
})


it('should throw an error for a null value passed', () => {
    expect(() => validation(null)).toThrow("Invalid email")
})



it('should throw an error for an undefined email', () => {
    expect(() => validation(undefined)).toThrow("Invalid email")
})



it('should throw an error if an empty string is passed', () => {
    const email = '';
    const resultFn = () => validation(email)
    expect(resultFn).toThrow()
})






it('should validate a non empty array', () => {
    const array = [2, 5, 6];
    const resultFn = () => validateArrayNotEmpty(array)
    expect(resultFn).not.toThrow()
})



it('should throw an error for empty array', () => {
    expect(() => validateArrayNotEmpty([])).toThrow('Array can not empty')
})


it('should throw an error for non array input', () => {
    expect(() => validateArrayNotEmpty('not an array')).toThrow('Array can not empty')
})


it('should throw an error for null input', () => {
    expect(() => validateArrayNotEmpty(null)).toThrow('Array can not empty')
})


it('should throw an error for null input', () => {
    expect(() => validateArrayNotEmpty(undefined)).toThrow('Array can not empty')
})