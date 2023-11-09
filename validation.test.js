import { expect, it } from "vitest";
import { validation } from "./validation";


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


