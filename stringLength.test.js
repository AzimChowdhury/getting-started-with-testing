import { expect, it } from "vitest";
import { stringLength } from "./stringLength";


it('should return correct length for string', () => {
    expect(stringLength('')).toBe(0);
    expect(stringLength('a')).toBe(1);
    expect(stringLength('ab')).toBe(2);
    expect(stringLength('abc')).toBe(3);
    expect(stringLength('abc def')).toBe(7);
})

it('should throw error for non string input', () => {
    expect(() => stringLength(null)).toThrow();
    expect(() => stringLength(undefined)).toThrow();
    expect(stringLength(123)).toBeUndefined()
})